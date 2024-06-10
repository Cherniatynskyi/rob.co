import { useState } from 'react'
import css from './NavImages.module.css'

export const ProductImagesNav = ({images}) => {
  const [selectedImg, setSelectedImg] = useState(images[0])

  const handleSelectImg = (e) =>{
    console.log(e.target.dataset.selected)
    setSelectedImg(e.target.src)
  }

  return (
    <div className={css.imgNavWrap}>
        <div className={css.imagesControlsWrap}>
        {images?.map(el=>{
          return (<div key={el} className={css.imageCont}><img data-selected={selectedImg === el} onClick={(e)=>handleSelectImg(e)} className={css.image} src={el} alt='robot'/></div>)
        })}
      </div>
      <div className={css.shownImgWrap}><img className={css.shownImg} src={selectedImg} alt="" /></div>
    </div>
  )
}
