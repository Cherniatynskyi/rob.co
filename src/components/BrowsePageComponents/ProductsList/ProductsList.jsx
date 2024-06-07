import {ProductCard} from '../../ProductCard/ProductCard'
import css from './ProductList.module.css'

export const ProductsList = () => {
  return (
    <ul className={css.productsList}>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
    </ul>
  )
}
