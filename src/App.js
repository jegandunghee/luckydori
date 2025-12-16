import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import MainPage from "./page/MainPage"
import CartPage from "./page/CartPage"
import CategoryPage from "./page/CategoryPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element = {<Layout/>}>
          {/* 첫 페이지*/}
          <Route path="/" element = {<MainPage/>} />
          <Route path="/cart" element = {<CartPage />} />
          <Route path="/category" element = {<CategoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App