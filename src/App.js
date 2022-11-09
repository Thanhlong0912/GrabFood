import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"

function App() {
  /*
  Step1 :  const { productItems } = Dữ liệu bằng cách sử dụng props
  
  Step 2 : Mục nhập lại giỏ hàng ma handle bằng useState
  ==> CartItem lai pass garre using props from  <Cart CartItem={CartItem} />  import in cartItem
 
  Step 3 :  Thêm

  Step 4 :  addToCart bằng cách sử dụng props in pages and cart components
  */

  //Step 1 :
  const { productItems } = Data
  const { shopItems } = Sdata

  //Step 2 :
  const [CartItem, setCartItem] = useState([])

  //Step 4 :
  const addToCart = (product) => {
    // Nếu  sản phẩm đã sẵn sàng giỏ hàng
    const productExit = CartItem.find((item) => item.id === product.id)
    // if productExit thoát trong giỏ hàng thì sẽ chạy fun () => setCartItem 
    // inside => setCartItem sẽ chạy => map() mỗi cart
    // check if item.id , product.id 
    // productExit product display
    // increase product QTY by 1
    // if item and product doesnt match then will add new items
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      // nếu k có thì cart is empty
      // nếu có thì increase 1
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  // Step: 6
  const decreaseQty = (product) => {
    // sp có sẵn trong cart
    const productExit = CartItem.find((item) => item.id === product.id)

    // nếu item.id không khớp với product.id thì các mặt hàng đó sẽ được hiển thị trong giỏ hàng
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      // nếu sản phẩm thoát và qty của sản phẩm đó không bằng 1
      // sau đó sẽ chạy hàm gọi setCartItem
      // bên trong setCartItem, chúng ta sẽ chạy phương thức map()
      // this map () sẽ kiểm tra xem item.id có khớp với produt.id hay không, sau đó chúng ta phải mô tả số lượng sản phẩm bằng 1
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Switch>
          <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
