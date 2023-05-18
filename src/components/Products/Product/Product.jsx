import { useNavigate } from "react-router-dom";

import "./Product.scss";


const Product = ({id,data}) => {
    const navigate = useNavigate()
    // console.log(data)
    return <div className="productCard" onClick={()=>navigate(`/product/`+id)}>
        <div className="thumbnail">
            <img src={data?.img?.data[0]?.attributes?.url} alt="" />
        </div>
        <div className="productDetails">
            <p className="name">{data?.title}</p>
            <p className="price">&#8377;{data?.price}</p>
        </div>
    </div>;
};

export default Product;
