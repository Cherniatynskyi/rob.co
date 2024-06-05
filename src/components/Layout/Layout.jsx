import { Suspense} from "react";
import { Outlet, NavLink } from "react-router-dom";
import css from './Layout.module.css'
import { FaCartShopping } from "react-icons/fa6";

export const Layout = () => {
  return (
    <>
        <header className={`${css.content} ${css.header}`}>
            <NavLink to='/'><h2 className={css.logo}>ROB.CO</h2></NavLink>
            <ul className={css.navList}>
                <li className={css.navItem}><NavLink className={css.navLink} to='/browse'>Shop</NavLink></li>
                <li className={css.navItem}><NavLink className={css.navLink} to='/browse'>Top Sales</NavLink></li>
                <li className={css.navItem}><NavLink className={css.navLink} to='/browse'>New Arrival</NavLink></li>
                <li className={css.navItem}><NavLink className={css.navLink} to='/'>Brands</NavLink></li>
            </ul>
            <div className={css.cartContainer}>
                <NavLink className={css.cartIcon} to='/cart'><FaCartShopping size='24' /></NavLink>
                <span className={css.spanCart}>1</span>
            </div>
        </header>
        <Suspense fallback={<div>Loading.....</div>}>
              <main className={css.content}>
                <Outlet/>
              </main>
        </Suspense>
        <footer>
            <div>
                <h2>Feedback title</h2>
                <form action="">
                    <input type="text" />
                    <button>Subscribe</button>
                </form>
            </div>
            <div>
                <h3>ROB.CO</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, quam.</p>
                <ul>
                    <li>Inst</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Git</li>
                </ul>
            </div>
            <ul>
                <ul>
                    <li>Faq</li>
                    <li>Faq</li>
                    <li>Faq</li>
                    <li>Faq</li>
                </ul>
                <ul>
                    <li>Faq</li>
                    <li>Faq</li>
                    <li>Faq</li>
                    <li>Faq</li>
                </ul>
                <ul>
                    <li>Faq</li>
                    <li>Faq</li>
                    <li>Faq</li>
                    <li>Faq</li>
                </ul>
            </ul>
            <div>
                <p>@rights reserved</p>
                <ul>Payments</ul>
            </div>
        </footer>
    </>
  )
}
