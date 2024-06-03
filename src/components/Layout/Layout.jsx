import { Suspense} from "react";
import { Outlet, NavLink } from "react-router-dom";

export const Layout = () => {
  return (
    <>
        <header>
            <h2>ROB.CO</h2>
            <ul>
                <li><NavLink to='/browse'>Shop</NavLink></li>
                <li><NavLink to='/browse'>Top Sales</NavLink></li>
                <li><NavLink to='/browse'>New Arrival</NavLink></li>
                <li><NavLink to='/'>Brands</NavLink></li>
            </ul>
            <div><NavLink to='/cart'>Cart</NavLink></div>
        </header>
        <Suspense fallback={<div>Loading.....</div>}>
              <main style={{backgroundColor: "tomato"}}>
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
