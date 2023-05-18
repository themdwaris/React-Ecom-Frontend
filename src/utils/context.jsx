import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AppContext = createContext();

const AppProvider = ({ children }) => {

  const getCartItemFromLS = () => {
    let cartItem = localStorage.getItem("cartItem");
    if (cartItem) {
      return JSON.parse(localStorage.getItem("cartItem"));
    }
    return [];
  };

  const [categories, setCategories] = useState();
  const [product, setProduct] = useState();
  const [cartItem, setCartItem] = useState(getCartItemFromLS());
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  useEffect(() => {
    let count = 0;
    cartItem.map((prod) => (count += prod.attributes.quantity));
    setCartCount(count);

    let subTotal = 0;
    cartItem.map(
      (prod) => (subTotal += prod.attributes.price * prod.attributes.quantity)
    );
    setCartSubTotal(subTotal);

    localStorage.setItem("cartItem",JSON.stringify(cartItem))
  }, [cartItem]);

  const handleAddToCart = (product, quantity) => {
    let items = [...cartItem];

    let index = items.findIndex((p) => {
      return p.id === product.id;
    });

    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...cartItem, product];
    }
    setCartItem(items);
  };

  const handleRemoveFromCart = (product) => {
    let items = [...cartItem];
    items = items.filter((p) => p.id !== product.id);
    setCartItem(items);
  };

  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItem];

    let index = items.findIndex((p) => p.id === product.id);
    if (type === "inc") {
      items[index].attributes.quantity += 1;
    } else if (type === "dec") {
      if (items[index].attributes.quantity === 1) return;
      items[index].attributes.quantity -= 1;

      // items[index].attributes.quantity=items[index].attributes.quantity
    }
    setCartItem(items);
  };


  return (
    <AppContext.Provider
      value={{
        categories,
        setCategories,
        product,
        setProduct,
        cartItem,
        setCartItem,
        cartCount,
        setCartCount,
        cartSubTotal,
        setCartSubTotal,
        handleAddToCart,
        handleRemoveFromCart,
        handleCartProductQuantity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useYourContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useYourContext };
