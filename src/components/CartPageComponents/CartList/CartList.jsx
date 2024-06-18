import css from './CartList.module.css'
import { useSelector } from 'react-redux'
import { OrdetItemCard } from '../OrderItemCard/OrdetItemCard'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export const CartList = () => {
  const [listRef] = useAutoAnimate()
  const {cartItems} = useSelector(state => state.items)
  return (
    <div className={css.orderListWrap}>
      {cartItems.length > 0 && <h2 className={css.cartTitle}>Ваш кошик</h2>}
      <ul className={css.orderList} ref={listRef}>
        {cartItems.length > 0 ? cartItems.map(product => {
          const {item, quantity} = product
          return (
            <OrdetItemCard key={item.title} item={item} quantity={quantity}/>
          )
        }) : <h3 className={css.marker}>Ваш кошик порожній  🛒</h3>}
      </ul>
    </div>
  )
}
