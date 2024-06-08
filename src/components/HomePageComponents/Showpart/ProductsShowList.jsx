import css from './Show.module.css'
import { ProductCard } from '../../ProductCard/ProductCard';


export const ProductsShowList = ({products}) => {
  return (
        <ul className={css.showList}>
          {products.map(item => {
            return <ProductCard key={item._id} item={item}></ProductCard>
          })}
        </ul>
  )
}
