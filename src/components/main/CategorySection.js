import "./CategorySection.scss";
import listData from "../../assets/data/categories.json";
import { useNavigate } from "react-router-dom";
const CategorySection = () => {
  const navigate = useNavigate();

  return (
    <section id="category">
      <h2>NEW COLLECTION</h2>
      <h3>소소한 일상에 작은 설렘을 더해줄 감성 문구 컬렉션!</h3>
      <p>우정,공부,힐링,다꾸까지 각자의 이야기를 담은 랜덤박스를 만나보세요</p>
      <ul>
        {/* <li>
          <img />
          <p></p>
        </li> */}
        {
          listData.map((item,idx)=>{
            return (
              <li key={idx} onClick={() => {navigate(`/category/${item.id}`)}}>
                <img 
                  src={require(`../../assets/images/circle_small/${item.image}`)}
                  alt={item.titme}
                />
                <p>{item.title}</p>
              </li>
            )
          })
        }
      </ul>

    </section>
  )
}

export default CategorySection