import {ProductCard} from '../../ProductCard/ProductCard'
import css from './ProductList.module.css'


export const ProductsList = ({products}) => {
  return (
    <ul className={css.productsList}>
        {products.map(item => {
          return <ProductCard key={item._id} item={item}/>
        })}
    </ul>
  )
}
