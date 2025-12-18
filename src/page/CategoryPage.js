import { useParams } from "react-router-dom"
import productData from '../assets/data/products.json'
import { useEffect, useState } from "react";
import ProductCard from "../components/ui/ProductCard";
import './CategoryPage.scss';

const CategoryPage = ({onAdd}) => {

  const [filterData, setFilterData] = useState([]);
  const {categoryName} = useParams();
  //보여줄 데이터는 categoryName과 같은 항목만 보여짐
  useEffect(() => {
    const items = productData.filter((item) => {
      return item.category === categoryName;
    })
    setFilterData(items);
  },[categoryName])
  
  return (
    <div className="category-page">
      <h2>{categoryName}</h2>
      <p>{filterData.length}개의 상품이 있습니다.</p>
      <div className="product-list">
        {
          filterData.map((item) => {
            return(
              <ProductCard
                key={item.id}
                item={item}
                onAdd={onAdd}
                />
            )
          })
        }
      </div>
    </div>
  )
}

export default CategoryPage