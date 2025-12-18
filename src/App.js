import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import MainPage from "./page/MainPage"
import CartPage from "./page/CartPage"
import CategoryPage from "./page/CategoryPage"
import "./assets/scss/global.scss";
import { useState } from "react"

const App = () => {
  const [cartItems,setCartItems] = useState([]);
  /**
   * 장바구니 목록 만들려면
   * 1. 해당 아이템이 있는지 없는지체크
   * 2. 없으면 --> 리스트에 추가
   * 3. 있으면 --> 추가되어 있는 리스트의 수량을 증가
   */
  const handleAddCart = (product)=>{
    //카트 목록에 아이템이 있는지 없는지 체크 : find
    const existItem = cartItems.find((item)=>{
      return item.id === product.id
    });
    if( existItem ){
      //수량만 증가 : map
      const items = cartItems.map((cart)=>{
        return (
          cart.id === product.id ? {...cart,quantity: cart.quantity+1} : cart
        )
      });
      setCartItems(items);
    } else {
      //cartItems에 추가
      const items = [...cartItems, {...product,quantity:1}];
      setCartItems(items);
    }
  }
  const handleUpdateQuantity = (id,type)=>{
    const update = cartItems.map((item)=>{      
      if(item.id === id) {
        if( type === 'plus') {
          //수량이 증가
          return {...item, quantity: item.quantity+1};
        } else if( type === 'minus' && item.quantity>1 ) {
          //수량을 감소
          return {...item, quantity: item.quantity-1};
        }
      }
      return item;
    });
    setCartItems(update);
  }
  const handleCartDelete = (id)=>{
    //id를 제외한 새로운 배열이 만들어지면 됨
    const items = cartItems.filter((item)=>{
      return item.id !== id;
    });
    setCartItems(items);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage onAdd={handleAddCart}/>}/>
          <Route 
            path="/cart" 
            element={
              <CartPage 
                cartItems={cartItems} 
                onUpdate={handleUpdateQuantity}
                onDelete={handleCartDelete}
              />
            }
          />
          <Route 
            path="/category/:categoryName" 
            element={<CategoryPage onAdd={handleAddCart} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App