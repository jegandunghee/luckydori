import './CategorySection.scss';
import categories from '../../assets/data/categories.json';
const CategorySection = () => {
  return (
    <section id='category'>

        <h2>NEW COLLECTION</h2>
        <h3>소소한 일상에 작은 설렘을 더해줄 감성 문구 컬렉션!</h3>
        <p>우정, 공부, 힐링, 다꾸까지 - 각자의 이야기를 담은 랜덤박스를 만나보세요</p>


        <ul>
          { categories.map( (item, idx) => { return (
            <li key={`${item.id}-${idx}`}>
              <img src={require(`../../assets/images/circle_small/${item.image}`)} alt={item.title}/>
              <p>{item.title}</p>
            </li>)
          })
          }
        </ul>

    </section>
  )
}

export default CategorySection