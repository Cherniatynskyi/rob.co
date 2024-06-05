import css from './Show.module.css'

export const ShowTitle = ({title}) => {
    return (
          <h2 className={css.showTitle}>{title}</h2>
    )
  }