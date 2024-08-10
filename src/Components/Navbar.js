import React from 'react'
import logo from '../Assests/logo.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <img className='logo' src={logo} alt="..."/>
                <Link className="navbar-brand" to='/home'>FIGHT CLUB</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item active ">
                            <Link to='/bodybuilding' className="nav-link">
                            
                            BODY BUILDING <span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/general' className="nav-link" >GENERAL FITNESS<span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/weightloss' className="nav-link">WEIGHT LOSS<span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" >SHOP<span className="sr-only"></span></Link>
                        </li>
                       
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
    </div>
  )
}

export default Navbar