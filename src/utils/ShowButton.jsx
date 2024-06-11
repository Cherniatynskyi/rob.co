import { useNavigate } from "react-router-dom"
import css from './styles.module.css'

export const ShowButton = () => {
  const navigate = useNavigate()
  return (
    <button className={css.showBtn} onClick={() => navigate('/browse')}>Дивитися всі</button>
  )
}
