import css from './Show.module.css'
import { ProductCard } from '../../ProductCard/ProductCard';


export const ProductsShowList = ({products}) => {
  return (
        <ul className={css.showList}>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </ul>
  )
}
