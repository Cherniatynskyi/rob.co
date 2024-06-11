import css from './styles.module.css'
import { useState } from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { increaseCounter, decreaseCounter } from '../redux/Items/itemsSlice';

export const Counter = ({item, value}) => {

    const [counter, setCounter] = useState(value)
    const dispatch = useDispatch()

    const quantHandler = (e) => {
        if(e.currentTarget.id === 'decrease'){
            if(counter === 0) return
            setCounter((prev) => prev-=1)
            dispatch(decreaseCounter(item))
            return
        }
        setCounter((prev) => prev+=1)
        dispatch(increaseCounter(item))
    }
  return (
    <div className={css.counterWrap}>
        <button onClick={(e)=>quantHandler(e)} id='decrease' disabled={counter === 1} className={css.counterButton}><FaMinus /></button>
        <span className={css.counterValue}>{counter}</span>
        <button onClick={(e)=>quantHandler(e)} id='increase' className={css.counterButton}><FaPlus /></button>
    </div>
  )
}
