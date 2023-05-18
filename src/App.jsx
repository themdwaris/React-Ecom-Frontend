import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NewsLetter from "./components/Footer/Newsletter/Newsletter";
import { AppProvider } from "./utils/context";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/category/:id" exact element={<Category />} />
          <Route path="/product/:id" exact element={<SingleProduct />} />
        </Routes>
        <NewsLetter />
        <Footer />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
