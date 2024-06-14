import css from './Show.module.css'
import { ProductCard } from '../../ProductCard/ProductCard';
import { NavLink } from 'react-router-dom';


export const ProductsShowList = ({products}) => {
  return (
        <ul className={css.showList}>
          {products.map(item => {
            return <NavLink to={`/browse/${item._id}`} key={item._id}><ProductCard item={item}></ProductCard></NavLink>
          })}
        </ul>
  )
}
