import React from 'react'
import { Link } from 'react-router-dom'

const GeneralCard = ({blog}) => {
    return (
        <div>
            <div class="card" style={{ width: "40rem" }}>
                    <Link to={`/general/${blog.id}`}><img
                        src={blog.img}
                        class="card-img"
                        alt="..."
                    /></Link>
                    <div class="card-body">
                    <h6 class="card-title ">{blog.title}</h6>
                    <p class="card-text">
                        {blog.discription}
                    </p>
                    
                    </div>
                </div>
        </div>
      )
}

export default GeneralCard