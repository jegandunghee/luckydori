import BannerSection from "../components/main/BannerSection"
import BlogSection from "../components/main/BlogSection"
import CategorySection from "../components/main/CategorySection"
import ProductSection from "../components/main/ProductSection"


const MainPage = () => {
  return (
    <div className="main-page">
      <BannerSection/>
      <CategorySection/>
      <ProductSection/>
      <BlogSection/>
    </div>
  )
} 

export default MainPage