import css from './ProductInfo.module.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { addCartItem } from '../../../redux/Items/itemsSlice';
import { toast } from 'react-toastify';

export const CartController = ({item}) => {
    
    const [counter, setCounter] = useState(1)
    const dispatch = useDispatch()
    const {cartItems} = useSelector(state => state.items)
    const cartProducts = cartItems.map(el=> el.item.title)

    const quantHandler = (e) => {
        if(e.currentTarget.id === 'decrease'){
            if(counter === 0) return
            setCounter((prev) => prev-=1)
            return
        }
        setCounter((prev) => prev+=1)
    }

    const handleAddToCart = () => {
        if(cartProducts.includes(item.title)){
            toast.warning('Цей товар уже у кошику!')
            return
        }
        const orderBody = {
            item,
            quantity: counter
        }
        toast.success('Ви додали товар до кошика')
        dispatch(addCartItem(orderBody))
    }

  return (
    <div className={css.controllerWrap}>
        <div className={css.counterWrap}>
            <button onClick={(e)=>quantHandler(e)} id='decrease' disabled={counter === 1} className={css.counterButton}><FaMinus /></button>
            <span className={css.counterValue}>{counter}</span>
            <button onClick={(e)=>quantHandler(e)} id='increase' className={css.counterButton}><FaPlus /></button>
        </div>
        <button onClick={handleAddToCart} className={css.addBtn}>Додати до кошика</button>
    </div>
  )
}
