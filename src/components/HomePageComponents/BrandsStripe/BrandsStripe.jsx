import css from './BrandStripe.module.css'
import { SiSamsung } from "react-icons/si";
import { SiLenovo } from "react-icons/si";
import { SiHuawei } from "react-icons/si";
import { SiEcovacs } from "react-icons/si";
import { SiXiaomi } from "react-icons/si";

export const BrandsStripe = () => {
  return (
    <section className={css.brandsSection}>
      <ul className={css.brandsList}>
        <li><SiSamsung /></li>
        <li><SiLenovo /></li>
        <li><SiHuawei /></li>
        <li><SiEcovacs /></li>
        <li><SiXiaomi/></li>
    </ul>
    </section>
  )
}
