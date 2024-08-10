import React from "react";
import "../Components/Card.css";
import Card from "./Card";
import main from '../Assests/main.jpg'

const BodyBuilding = ({bodyBlogs}) => {
  

  return (
    <div >
        {/* <h1>Bodybuilding</h1> */}
        <img className="img-fluid" src={main} width={1518} height={350} alt=""/>
        <div className="row  m-1">
        {bodyBlogs.map((blog,index)=>(
            <>
        <Card key={index} blog={blog}/>
        
         
         </> 
        ))}

      
    </div>
    </div>
  );
};

export default BodyBuilding;
