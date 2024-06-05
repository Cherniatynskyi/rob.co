import css from './styles.module.css'

export const StandartButton = ({buttonText}) => {
  return (
    <button className={css.mainBtn}>{buttonText}</button>
  )
}
