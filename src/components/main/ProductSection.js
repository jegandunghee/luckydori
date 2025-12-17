import { useEffect, useState } from 'react'
import productList from '../../assets/data/products.json'
import ProductCard from '../ui/ProductCard';
import './ProductSection.scss';


const ProductSection = () => {

  const [bestItems, setBestItems] = useState([]);

  useEffect(() => {
    //isBest 값이 true 상태 목록만 저장하기
    //조건에 의해 새로 생성 : filter
    const items = productList.filter((item) => {
      return item.isBest === true;
    });
    setBestItems(items.slice(0,8));
  },[])


  return (
    <section id="product">
      <h2>BEST SELLERS</h2>
      <p>가장 사랑받는 베스트 아이템을 만나보세요</p>
      <div className='product-grid'>
        {
          bestItems.map((item) => {
            return (
              <ProductCard key={item.id} item = {item} />
            )
          })
        }
        
      </div>
    </section>
  )
}

export default ProductSection