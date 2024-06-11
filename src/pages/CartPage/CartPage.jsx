import { CartList } from "../../components/CartPageComponents/CartList/CartList"
import { OrderBlock } from "../../components/CartPageComponents/OrderBlock/OrderBlock"
import { useEffect } from "react"

const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
      <div style={{padding: "80px 0", display: "flex"}}>
        <CartList/>
        <OrderBlock/>
      </div>
    )
}

export default CartPage
  