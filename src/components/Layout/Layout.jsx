import { Suspense} from "react";
import { Outlet, NavLink } from "react-router-dom";
import css from './Layout.module.css'
import { FaCartShopping } from "react-icons/fa6";
import { Footer } from "../Footer/Footer";
import { BurgerMenu } from "../../utils/BurgerMenu/BurgerMenu";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from '../../redux/menusSlice'

import { IoMenu } from "react-icons/io5";

export const Layout = () => {
  const {cartItems} = useSelector(state => state.items)
  const {isMenuOpen} = useSelector(state => state.menu)
  const dispatch = useDispatch()
  return (
    <>
        <header className={`${css.content} ${css.header}`}>
          
            <NavLink to='/'><h2 className={css.logo}>ROB.CO</h2></NavLink>
            <ul className={css.navList}>
                <li className={css.navItem}><NavLink className={css.navLink} to='/browse'>Товари</NavLink></li>
                <li className={css.navItem}><NavLink className={css.navLink} to='/browse'>Новинки</NavLink></li>
                <li className={css.navItem}><NavLink className={css.navLink} to='/'>Партнери</NavLink></li>
            </ul>
            <div className={css.cartContainer}>
                <button className={css.burgerBtn} onClick={()=>{dispatch(openMenu())}}><IoMenu /></button>
                <NavLink className={css.cartIcon} to='/cart'><FaCartShopping size='24' /></NavLink>
                {cartItems.length > 0 && <span className={css.spanCart}>{cartItems.length}</span>}
            </div>
        </header>
        <Suspense fallback={<div>Loading.....</div>}>
              <main className={css.content}>
                <Outlet/>
              </main>
        </Suspense>
        <Footer style={css.content} logoStyles={css.logo}/>
        {isMenuOpen && <BurgerMenu/>}
    </>
  )
}
