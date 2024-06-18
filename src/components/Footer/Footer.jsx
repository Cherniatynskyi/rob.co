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
import { toast } from 'react-toastify';

export const Footer = ({style, logoStyles}) => {
    const mailSendHandler = (e) =>{
        e.preventDefault()
        toast.success('Ви підписалися на розсилку!')
    }
  return (
    <footer className={style}>
            <div className={css.footerFeedbackWrap}>
                <h2 className={css.feedbackTitle}>БУДЬТЕ В курсі НАШИХ ОСТАННІХ ПРОПОЗИЦІЙ</h2>
                <form onSubmit={(e) => mailSendHandler(e)} className={css.feedbackForm} action="">
                    <label className={css.inputWrap} htmlFor="mail">
                        <input required type="email" name='mail' id='mail' placeholder='Введіть ваш email' className={css.feedbackInput} />
                        <FaRegEnvelope className={css.inputIcon}/>
                    </label>
                    <button type='submit' className={css.formBtn}>Підписатися на розсилку</button>
                </form>
            </div>
            <div className={css.footerMainWrap}>
                <div>
                    <h3 className={logoStyles}>ROB.CO</h3>
                    <p className={css.subtext}>Найкраще місце для вибору помічника зі ШІ</p>
                    <ul className={css.socialsList}>
                        <li><a className={css.socialsItem} href="https://instagram.com"><FaInstagram/></a></li>
                        <li><a className={css.socialsItem} href="https://x.com/home"><FaXTwitter/></a></li>
                        <li><a className={css.socialsItem} href="https://facebook.com"><FaFacebookF/></a></li>
                        <li><a className={css.socialsItem} href="https://github.com"><FaGithub/></a></li>
                    </ul>
                </div>
                <ul className={css.faqList}>
                    <li>
                        <h3 className={css.faqTitle}>Компанія</h3>
                        <ul className={css.faqSubList}>
                            <li>Про нас</li>
                            <li>Переваги</li>
                            <li>Роботи</li>
                            <li>Кар'єра</li>
                        </ul>
                    </li>
                    <li>
                        <h3 className={css.faqTitle}>Допомога</h3>
                        <ul className={css.faqSubList}>
                            <li>Підтримка користувачів</li>
                            <li>Інформація про доставку</li>
                            <li>Правила та умови</li>
                            <li>Політика конфіденційності</li>
                        </ul>
                    </li>
                    <li>
                        <h3 className={css.faqTitle}>Faq</h3>
                        <ul className={css.faqSubList}>
                            <li>Акаунт</li>
                            <li>Відслідкувати посилку</li>
                            <li>Замовлення</li>
                            <li>Оплата</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className={css.subFooterWrap}>
                <p>Rob.co © 2022-2024, Всі права захищені</p>
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
