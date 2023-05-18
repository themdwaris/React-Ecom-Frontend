import { useEffect } from "react";
import { fetchDataFromApi } from "../../utils/api";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";

import { useYourContext } from "../../utils/context";
import "./Home.scss";

const Home = () => {

  const { categories, setCategories,product,setProduct } = useYourContext();

  useEffect(() => {
    getProducts()
    getCategories();
  }, []);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      // console.log(res);
      setProduct(res)
    });
  };
  
  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      // console.log(res);
      setCategories(res)
    });
  };

  return (
    <div className="home">
      <Banner />
      <div className="mainContent wrapper">
        <div className="layout">
          <Category categories={categories}/>
          <Products product={product} headingText="Popular Products"  />
        </div>
      </div>
    </div>
  );
};

export default Home;
