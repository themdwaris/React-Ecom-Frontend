
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Products from "../Products/Products"
import "./Category.scss";

const Category = () => {
    const {id} = useParams()
   const {data}= useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`)

//    console.log(data)
    return <div className="categoryContainer">
        <div className="layout wrapper">
            <div className="categoryTitle">{data?.data[0]?.attributes?.categories?.data[0]?.attributes?.text}</div>
            <Products product={data} innerPage={true}/>
        </div>
    </div>;
};

export default Category;
