import { CartList } from "../../components/CartPageComponents/CartList/CartList"
import { OrderBlock } from "../../components/CartPageComponents/OrderBlock/OrderBlock"
import { useEffect } from "react"
import css from './CartPage.module.css'


const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
      <div className={css.pageWrap}>
        <CartList/>
        <OrderBlock/>
      </div>
    )
}

export default CartPage
  