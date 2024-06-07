import css from './styles.module.css'

export const StandartButton = ({buttonText, styleC}) => {
  return (
    <button className={`${css.mainBtn} ${styleC}`}>{buttonText}</button>
  )
}
