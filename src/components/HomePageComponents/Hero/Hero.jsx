import React from 'react'
import { StandartButton } from '../../../utils/StandartButton'
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate()
  return (
    <div>
        <div>
            <h1>Find best ai helper</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea sed itaque illum soluta recusandae nostrum.</p>
            <button onClick={() => navigate('/browse')}><StandartButton buttonText="Shop Now"></StandartButton></button>
            
        </div>
        <ul>
            <li><span>200+</span><p>International Brands</p></li>
            <li><span>200+</span><p>High-Quality Products</p></li>
            <li><span>200+</span><p>Happy Customers</p></li>
        </ul>
        <img src="#" alt="" />
    </div>
  )
}
