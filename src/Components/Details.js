import React from 'react'
import { useParams } from 'react-router-dom'
import '../Components/Details.css'

const Details = ({blogs}) => {

    const {id} = useParams();
    const blogOne = blogs.filter((blog)=>blog.id == id);
    
    const blog = blogOne[0];
  return (
    <div >
        <div className='details'>
            <h2>{blog.discription}</h2>
            <img src={blog.img} alt="..." className='img-fluid'/>
            <p>{blog.p}</p>
            <h4>{blog.h1}</h4>
            <p>{blog.p1}</p>
            <h4>{blog.h2}</h4>
            <ul>
                <li>{blog.p2[0]}</li>
                <li>{blog.p2[1]}</li>
                <li>{blog.p2[2]}</li>
                <li>{blog.p2[3]}</li>
            </ul>
        </div>
    </div>
  )
}

export default Details