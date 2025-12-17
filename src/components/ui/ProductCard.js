import { useState } from 'react';
import './ProductCard.scss';

const ProductCard = ({item}) => {
  const [isHover, setIsHover] = useState(false);


  const getImgPath = (imgName) => {
    let hoverName = imgName;
    if(isHover){
      //경로 값에서 -1 이 -2로 변경되도록 설정 
      hoverName = imgName.replace('-1','-2');
    }
    return require(`../../assets/images/new/${hoverName}`);
  }
  

  return (
    <div className="product-card"
      onMouseEnter={() => {setIsHover(true)}}
      onMouseLeave={() => {setIsHover(false)}}
      >
      <div className="img-box">
        {/* isBest 가 true인 상품만 보여지도록 설정 */}
        <img src={getImgPath(item.image)} alt='상품이미지'/>
      </div>

      <div className="txt-box">
        <h3>{item.title}</h3>
        <p>￦ {Number(item.price).toLocaleString()}</p>
      </div>

      <p className='add-cart'>Add Cart</p>
    </div>
  )
}

export default ProductCard