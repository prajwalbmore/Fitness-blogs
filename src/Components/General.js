import React from 'react'
import "../Components/Card.css";
import main from '../Assests/main.jpg'
import GeneralCard from './GeneralCard';

const General = ({general}) => {

  return (
    <div>
        {/* <h1>Generalfitness</h1> */}
        <img className="img-fluid" src={main} width={1518} height={350}/>
    <div className="row m-2 row ">
        {general.map((blog,index)=>(

            <GeneralCard key={index} blog={blog}/>
    
        ))}
    </div>
    </div>
  )
}

export default General