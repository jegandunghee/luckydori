import { useState } from "react"
import "./ProductCard.scss"


const ProductCard = ({item,onAdd}) => {
  const [isHover,setIsHover] = useState(false);
  const getImagePath = (imgName)=>{
    let hoverName = imgName;
    if( isHover ){
      //경로값에서 -1 --> -2
      hoverName = imgName.replace('-1','-2');
    }
    return require(`../../assets/images/new/${hoverName}`);
  }
  const handleClick = ()=>{
    onAdd(item);
  }
  return (
    <div className="product-card"
      onMouseEnter={()=>{setIsHover(true)}}
      onMouseLeave={()=>{setIsHover(false)}}
    >
      <div className="img-box">
        <img 
          src={getImagePath(item.image)}
          alt={item.title}
        />
      </div>
      <div className="txt-box">
        <h3>{item.title}</h3>
        <p>￦{Number(item.price).toLocaleString()}</p>
      </div>
      <p className="add-cart" onClick={handleClick}>Add Cart</p>
    </div>
  )
}

export default ProductCard