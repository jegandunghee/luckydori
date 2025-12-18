import { useEffect, useState } from "react"
import productList from "../../assets/data/products.json"
import ProductCard from "../ui/ProductCard"
import "./ProductSection.scss"
const ProductSection = ({onAdd}) => {
  const [bestItems,setBestItems] = useState([]);
  useEffect(()=>{
    // isBest값이 true 상태목록만 저장
    const items = productList.filter((item)=>{
      return item.isBest === true;
    });
    // slice처리를 해서 베스트 아이템을 8개만.
    setBestItems(items.slice(0,8));
  },[]);
  return (
    <section id="product">
      <h2>BEST SELLERS</h2>
      <p>가장 사랑받는 베스트 아이템을 만나보세요</p>
      <div className="product-grid">
        {
          bestItems.map((item)=>{
            return (
              <ProductCard 
                key={item.id}
                item={item}
                onAdd={onAdd}
              />
            )
          })
        }
      </div>
    </section>
  )
}

export default ProductSection