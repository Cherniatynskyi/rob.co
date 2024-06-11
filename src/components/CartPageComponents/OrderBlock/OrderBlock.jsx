import css from './OrderBlock.module.css'
import { useSelector } from 'react-redux'

export const OrderBlock = () => {

  const {cartItems} = useSelector(state => state.items)

  const productsSumm = cartItems.reduce((acc, el)=>{
    return acc + (el.item.price * el.quantity)
  },0)

  return (
    <>
      {cartItems.length > 0 && <div className={css.orderWrap}>
      <div>
        <h3 className={css.orderSummTitle}>Ваше замовлення</h3>
        <ul className={css.strokesList}>
          <li className={css.summStroke}>
            <span className={css.strokeText}>Сума</span>
            <span className={css.strokeValue}>₴ {productsSumm}</span>
          </li>
          <li className={css.summStroke}>
            <span className={css.strokeText}>Доставка</span>
            <span className={css.strokeValue}>₴ 123</span>
          </li>
          <li className={css.summStroke}>
            <span className={css.strokeText}>Загальна вартість</span>
            <span className={css.strokeValue}>₴ {123+productsSumm}</span>
          </li>
        </ul>
      </div>
      <button className={css.orderBtn}>Перейти до оплати</button>
    </div>}
    </>
  )
}
