import React from 'react'

import main from '../Assests/main.jpg'
import WeightCard from './WeightCard'

const WeightLoss = ({weight}) => {

    
  return (
    <div>
        {/* <h1>Weightloss</h1> */}
        <img className="img-fluid" src={main} width={1518} height={350} alt="..."/>
    <div className="row m-2 row ">
        {weight.map((blog,index)=>(

        <WeightCard key={index} blog={blog}/>
            
        ))}

      
    </div>
    </div>
  )
}

export default WeightLoss