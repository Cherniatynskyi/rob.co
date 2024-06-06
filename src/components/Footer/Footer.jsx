import css from './Footer.module.css'
import { FaRegEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import badge from '../../images/Badge.png'
import badge2 from '../../images/Badge2.png'
import badge3 from '../../images/Badge3.png'
import badge4 from '../../images/Badge4.png'
import badge5 from '../../images/Badge5.png'

export const Footer = ({style, logoStyles}) => {
  return (
    <footer className={style}>
            <div className={css.footerFeedbackWrap}>
                <h2 className={css.feedbackTitle}>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
                <form className={css.feedbackForm} action="">
                    <label className={css.inputWrap} htmlFor="mail">
                        <input type="email" name='mail' id='mail' placeholder='Enter your email address' className={css.feedbackInput} />
                        <FaRegEnvelope className={css.inputIcon}/>
                    </label>
                    <button className={css.formBtn}>Subscribe to Newsletter</button>
                </form>
            </div>
            <div className={css.footerMainWrap}>
                <div>
                    <h3 className={logoStyles}>ROB.CO</h3>
                    <p className={css.subtext}>The best place to choose your AI helper</p>
                    <ul className={css.socialsList}>
                        <li><a className={css.socialsItem} href="https://instagram.com"><FaInstagram/></a></li>
                        <li><a className={css.socialsItem} href="https://x.com/home"><FaXTwitter/></a></li>
                        <li><a className={css.socialsItem} href="https://facebook.com"><FaFacebookF/></a></li>
                        <li><a className={css.socialsItem} href="https://github.com"><FaGithub/></a></li>
                    </ul>
                </div>
                <ul className={css.faqList}>
                    <li>
                        <h3 className={css.faqTitle}>Company</h3>
                        <ul className={css.faqSubList}>
                            <li>About</li>
                            <li>Features</li>
                            <li>Works</li>
                            <li>Career</li>
                        </ul>
                    </li>
                    <li>
                        <h3 className={css.faqTitle}>Help</h3>
                        <ul className={css.faqSubList}>
                            <li>Customers Support</li>
                            <li>Delivery Details</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </li>
                    <li>
                        <h3 className={css.faqTitle}>Faq</h3>
                        <ul className={css.faqSubList}>
                            <li>Account</li>
                            <li>Manage Deliveries</li>
                            <li>Orders</li>
                            <li>Payments</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className={css.subFooterWrap}>
                <p>Rob.co © 2022-2024, All Rights Reserved</p>
                <ul className={css.paymentsList}>
                    <li><img src={badge} alt="" /></li>
                    <li><img src={badge2} alt="" /></li>
                    <li><img src={badge3} alt="" /></li>
                    <li><img src={badge4} alt="" /></li>
                    <li><img src={badge5} alt="" /></li>
                </ul>
            </div>
        </footer>
  )
}
