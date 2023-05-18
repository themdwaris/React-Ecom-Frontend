import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";

import { useFetch } from "../../../hooks/useFetch";

import "./Search.scss";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

 
  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

 if(query===""){
  data=null;
 }
  return (
    <div className="searchContainer">
      <div className="searchContent">
        <input
          type="text"
          placeholder="Search for products"
          autoFocus
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
        />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="searchResultContent">
        <div className="searchResult">
          {data?.data?.map((item) => {
            return (
              <div className="searchResultItem" key={item.id} onClick={()=>{
                navigate(`/product/${item.id}`)
                setShowSearch(false)
              }}>
                <div className="img">
                  <img src={item.attributes.img.data[0].attributes.url} alt="" />
                </div>
                <div className="prodDetails">
                  <span className="name">{item?.attributes?.title}</span>
                  <span className="desc">{item?.attributes?.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
