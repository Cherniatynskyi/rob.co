import {ProductCard} from '../../ProductCard/ProductCard'
import css from './ProductList.module.css'
import { NavLink } from 'react-router-dom'


export const ProductsList = ({products}) => {
  return (
    <ul className={css.productsList}>
        {products.length > 0 ? products.map(item => {
          return <NavLink key={item._id} to={`${item._id}`}>
                    <ProductCard  item={item}/>
                  </NavLink>
        }): <h3 style={{fontSize:"34px", marginTop: "50px", marginRight: "50px"}}>На жаль, товарів за таким запитом не знайдено 😔</h3>}
    </ul>
  )
}
