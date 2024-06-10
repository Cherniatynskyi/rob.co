import { LuSettings2 } from "react-icons/lu";
import css from './Filter.module.css'
import Slider from "react-slider";
import { useState } from "react";
import {StandartButton} from '../../../utils/StandartButton'
import { useDispatch } from "react-redux";
import { setFilter } from "../../../redux/Items/itemsSlice";

export const Filter = () => {

  const dispatch = useDispatch()

  const MIN = 1000
  const MAX = 30000
  const [priceValues, setPriceValues] = useState([MIN, MAX])
  const [colorValue, setColorValue] = useState('all')
  const [categoryValue, setCategoryValue] = useState('all')


  const onSubmit = (e) =>{
    e.preventDefault()
    const filterValues = {
        category: categoryValue,
        pricemin: priceValues[0],
        pricemax: priceValues[1],
        color: colorValue
    }
    dispatch(setFilter(filterValues))
  }

  const handleCategoryChange = (e) =>{
    setCategoryValue(e.target.value)
  }

  const handleColorChange = (e) =>{
    setColorValue(e.target.value)
  }

  const resetFilters = () =>{
    const resetedFilters = {
      category: 'all',
      pricemin: '0',
      pricemax: '30000',
      color: 'all'
    }
    dispatch(setFilter(resetedFilters))
  }

  return (
    <div className={css.filterWrap}>
      <h2 className={css.filterTitle}>Filters <LuSettings2 color="grey"/></h2>
      <button onClick={resetFilters}>Reset</button>
        <form action="" onSubmit={onSubmit}>
          <fieldset className={css.typesSet}>
            <legend className={css.sectionTitle}>Product type</legend>
            <div className={css.typesWrap}>
                <label  className={css.container}>
                    <input               
                      type="radio"                  
                      name="icon"       
                      value='floor-vacuum'
                      onChange={(e)=>handleCategoryChange(e)}                
                    />
                    <img className={css.checkmark} src="http://localhost:3000/rob.co/static/media/hero.4634d739f229087cc8fd.png" alt="" />
                </label>
                <label  className={css.container}>
                    <input               
                      type="radio"                  
                      name="icon" 
                      value='window-vacuum'                
                      onChange={(e)=>handleCategoryChange(e)}           
                    />
                    <img className={css.checkmark} src="https://content2.rozetka.com.ua/goods/images/big/415700887.jpg" alt="" />
                </label>
                <label  className={css.container}>
                    <input               
                      type="radio"                  
                      name="icon"  
                      value='homepod'      
                      onChange={(e)=>handleCategoryChange(e)}                    
                    />
                    <img className={css.checkmark} src="https://content1.rozetka.com.ua/goods/images/big/252305257.jpg" alt="" />
                </label>
          </div>
          </fieldset>
          <div>
            <h3 className={css.sectionTitle}>Price</h3>
            <span className={css.priceValues}>{`₴ ${priceValues[0]} --- ₴ ${priceValues[1]}`}</span>
            <Slider
              className={css.priceSlider}
              thumbClassName={css.priceThumb}
              trackClassName='track'
              markClassName={css.marks}
              value = {priceValues}
              min = {MIN}
              max= {MAX}
              onChange={setPriceValues}
              ariaLabel={['Lower thumb', 'Upper thumb']}
              ariaValuetext={state => `Thumb value ${state.valueNow}`}
              renderThumb={(props, state) => {
                const { key, ...restProps } = props;
                const prop = { ...restProps };
                return (
                  <div className={css.priceThumb} key={key} {...prop}>
            
                  </div>
                );
              }}
              pearling
              minDistance={100}
            />
          </div>
          <div>
          <fieldset className={css.typesSet}>
            <legend className={css.sectionTitle}>Color</legend>
            <div className={css.typesWrap}>
                <label  className={css.container}>
                    <input               
                      type="radio"                  
                      name="color"                      
                      value='white'  
                      onChange={(e)=>handleColorChange(e)}                    
                    />
                    <div className={css.checkmark} />
                </label>
                <label  className={css.container}>
                    <input               
                      type="radio"                  
                      name="color"       
                      value='black' 
                      onChange={(e)=>handleColorChange(e)}                      
                    />
                    <div style={{backgroundColor:'black'}} className={css.checkmark} />
                </label>
                <label  className={css.container}>
                    <input               
                      type="radio"                  
                      name="color"       
                      value='grey'  
                      onChange={(e)=>handleColorChange(e)}                     
                    />
                    <div style={{backgroundColor:'grey'}} className={css.checkmark} />
                </label>
          </div>
          </fieldset>
          </div>
          <StandartButton styleC={css.styleBtn} type='submit' buttonText='Apply'></StandartButton>
        </form>
        
    </div>
  )
}
