import Product from "./Product/Product"

import "./Products.scss";


const Products = ({product,innerPage,headingText}) => {
    // console.log(product)
    return <div className="productSection">
        {!innerPage && <div className="sectionHeading">{headingText}</div>}
        <div className="productContent">
            {product?.data?.map((item)=>{
                return <Product key={item?.id} id={item?.id} data={item?.attributes}/>
            })}
         
        </div>
    </div>;
};

export default Products;
