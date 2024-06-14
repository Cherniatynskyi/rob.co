import css from './OrderItemCard.module.css'
import { MdDelete } from "react-icons/md";
import { Counter } from '../../../utils/Counter';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../../../redux/Items/itemsSlice';
import { toast } from 'react-toastify';

export const OrdetItemCard = ({item, quantity}) => {

    const dispatch = useDispatch()

    const handelDelete = () =>{
        dispatch(deleteFromCart(item.title))
        toast.success(`(${item.title}) видалено з кошика`)
    }

  return (
    <div className={css.orderItemWrap}>
        <img className={css.orderItemImg} src={item.photo_urls[0]} alt="" />
        <div className={css.infoWrap}>
            <h3>{item.title}</h3>
            <span className={css.price}>₴ {item.price} x{quantity}</span>
            <span className={css.priceTotal}>₴ {item.price * quantity}</span>
        </div>
        <div className={css.controlsWrap}>
            <button onClick={handelDelete} className={css.deleteBtn}><MdDelete /></button>
            <Counter item={item.title} value={quantity}/>
        </div>
    </div>
  )
}
