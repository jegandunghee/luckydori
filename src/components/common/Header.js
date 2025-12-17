import Gnb from "./Gnb"
import logoImg from '../../assets/images/logo.png'
// 카트 아이콘
import { BsCart4 } from "react-icons/bs";
// scss파일 임포트
import './Header.scss'
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <div className="header-top">
        <Link to = '/'>
          <img src={logoImg} alt="luckydori 로고이미지"/>
        </Link>
        <Link to = '/cart'>
          <BsCart4 className="cart-icon" />
        </Link>
      </div>
      <Gnb/>
    </header>
  )
}

export default Header