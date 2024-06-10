import {ProductCard} from '../../ProductCard/ProductCard'
import css from './ProductList.module.css'
import { NavLink } from 'react-router-dom'


export const ProductsList = ({products}) => {
  return (
    <ul className={css.productsList}>
        {products.map(item => {
          return <NavLink key={item._id} to={`${item._id}`}>
                    <ProductCard  item={item}/>
                  </NavLink>
        })}
    </ul>
  )
}
