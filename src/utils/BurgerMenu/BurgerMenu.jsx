import css from './BurgerMenu.module.css'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../../redux/menusSlice'
import { useLockBodyScroll } from '@uidotdev/usehooks';
import { FaCartShopping } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';

export const BurgerMenu = ({isOpen}) => {
    useLockBodyScroll()
    const {isMenuOpen} = useSelector(state => state.menu)
    const {cartItems} = useSelector(state => state.items)
    const variants = {
        open: { opacity: 0, x: 0 },
        closed: { opacity: 1, x: "-43%" },
      }
    const dispatch = useDispatch()
  return (
        <>
            <motion.div
                 
                 onClick={() => dispatch(closeMenu())} className={`${css.overlay} ${!isMenuOpen && css.overlayClosed}`}>
            </motion.div>
            <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                 className={css.menuBody}>
                <button onClick={() => dispatch(closeMenu())} className={css.closeBtn}><IoClose size={40}/></button>
                <ul className={css.menuList}>
                <li onClick={() => dispatch(closeMenu())} className={css.navItem}><NavLink className={css.navLink} to='/'>Головна</NavLink></li>
                    <li onClick={() => dispatch(closeMenu())} className={css.navItem}><NavLink className={css.navLink} to='/browse'>Товари</NavLink></li>
                    <li onClick={() => dispatch(closeMenu())} className={css.navItem}><NavLink className={css.navLink} to='/browse'>Новинки</NavLink></li>
                    <li onClick={() => dispatch(closeMenu())} className={css.navItem}><NavLink className={css.navLink} to='/'>Партнери</NavLink></li>
                    <li onClick={() => dispatch(closeMenu())} className={css.navItem}>
                        <NavLink className={css.cartIcon} to='/cart'><FaCartShopping size='20' />
                            <span>Мій кошик</span>
                            {cartItems.length > 0 && <span className={css.spanCart}>{cartItems.length}</span>}
                        </NavLink>
                        
                    </li>
                </ul>
                
            </motion.div>
        </>
  )
}
