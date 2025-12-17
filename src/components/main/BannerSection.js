import logoImg from '../../assets/images/logo.png';
import './BannerSection.scss';

const BannerSection = () => {
  return (
    <section id='banner'>
      <div className="bg-wrap">
        <div className="text-wrap">
          <h1>히노키의 감성을 담은 <br/> 새로운 문구 컬렉션을 만나보세요</h1>
          <img src= {logoImg} alt='banner logo img'/>
          <button>
            감성별 추천 박스 보기
          </button>
        </div>
      </div>
    </section>
  )
}

export default BannerSection      