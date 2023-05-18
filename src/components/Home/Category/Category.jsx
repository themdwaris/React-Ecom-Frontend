
import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({ categories }) => {
  const navigate = useNavigate()
  return (
    <div className="categorySection">
      <div className="categoryContent">
        {categories?.data?.map((currItem) => {
          // const {id,img} = currItem
          // console.log(currItem.attributes)
          return (
            <div className="category" key={currItem.id} onClick={()=>{
              navigate(`/category/${currItem.id}`)
            }}>
              <img src={currItem?.attributes?.img?.data?.attributes?.url} alt="catgeory" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
