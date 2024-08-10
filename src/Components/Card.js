import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({blog}) => {
  return (
    <div >
        <div className="card" style={{ width: "40rem" }}>
                <Link to={`/bodybuilding/${blog.id}`}><img
                    src={blog.img}
                    className="card-img"
                    alt="..."
                /></Link>
                <div className="card-body">
                <h6 className="card-title ">{blog.title}</h6>
                <p className="card-text">
                    {blog.discription}
                </p>
                
                </div> 
            </div>
    </div>
  )
}

export default Card