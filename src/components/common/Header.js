import Gnb from "./Gnb"
import logoImg from '../../assets/images/logo.png'
// 카트 아이콘
import { BsCart4 } from "react-icons/bs";
// scss파일 임포트
import './Header.scss'


const Header = () => {
  return (
    <header>
      <div className="header-top">
        <img src={logoImg} alt="luckydori 로고이미지"/>
        <BsCart4 className="cart-icon" />
      </div>
      <Gnb/>
    </header>
  )
}

export default Header