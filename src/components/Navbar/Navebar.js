import React, { useContext } from 'react'
import { CountContext } from '../../App'
import image from '../Images/logo1.svg'
import "../css/style.css"

export default function Navebar(props) {
    const {count, setcount} = useContext(CountContext)
            return (
            <nav className={`navbar navbar-expand-lg ${props.fixed} navbar-light bg-light`} id={props.id}>
                <div className="container">
                    <a className="navbar-brand mx-5" href="#"><img src={image} style={{height: "30px"}}/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <span className="nav-link mx-4 counter text-light" id="count">COUNTER {count}</span>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ROOMS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">PAGES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CONTACT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">BLOG</a>
                            </li>
                            <li className="nav-item navbtn">
                                <a className="nav-link navbtn" href="#"><span className="fa fa-calendar"></span> BOOK ONLINE</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
}

