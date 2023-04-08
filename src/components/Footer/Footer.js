import React, { Component } from 'react'
import image from '../Images/logo2.svg'
import "../css/style.css"
import "../css/all.css"
import "../css/normalize.css"

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 widget">
                                <img src={image} alt=""/>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi sint corporis quaerat eius voluptas culpa aliquid sed</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati aliquid praesentium iusto odit qui a</p>
                            </div>
                            <div className="col-md-3 col-sm-6 widget">
                                <h5>LATEST NEWS</h5>
                                <ul>
                                    <li>
                                        <a href="#">Lorem ipsum dolor</a><br/>
                                        <small>lorem dolor</small>
                                    </li>
                                    <hr/>
                                    <li>
                                        <a href="#">Lorem ipsum dolor</a><br/>
                                        <small>lorem dolor</small>
                                    </li>
                                    <hr/>
                                    <li>
                                        <a href="#">Lorem ipsum dolor</a><br/>
                                        <small>lorem dolor</small>
                                    </li>
                                    <hr/>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6 widget">
                                <h5>USEFUL LINKS</h5>
                                <ul className="useful-links">
                                    <li>
                                        <a href="#">About Us</a>
                                    </li>
                                    <hr/>
                                    <li>
                                        <a href="#">Contact Us</a>
                                    </li>
                                    <hr/>
                                    <li>
                                        <a href="#">History</a>
                                    </li>
                                    <hr/>
                                    <li>
                                        <a href="#">Gallary</a>
                                    </li>
                                    <hr/>
                                    <li>
                                        <a href="#">Location</a>
                                    </li>
                                    <hr/>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6 widget">
                                <h5>CONTACT US</h5>
                                <ul>
                                    <li>
                                        <i className="fas fa-map-marker-alt"></i>  25, Navagio Zakynthos, Greece
                                    </li>
                                    <hr/>
                                    <li>
                                        <i className="fa fa-phone"></i>   Phone: 800 123 3456
                                    </li>
                                    <hr/>
                                    <li>
                                        <i className="fa fa-fax"></i>  Fax: 800 123 3456
                                    </li>
                                    <hr/>
                                    <li>
                                        <i className="far fa-envelope"></i>  Email: <a href="#">contact@site.com</a>
                                    </li>
                                    <hr/>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subfooter">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <div style={{padding: "10px"}}>
                                    Copyright 2016 <a href="#">Zante Hotel </a>All Rights Reserved.
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 icons">
                                <div className="social">
                                    <a href="#"><i className="fab fa-facebook-square"></i></a>
                                    <a href="#"><i className="fab fa-twitter-square"></i></a>
                                    <a href="#"><i className="fab fa-google"></i></a>
                                    <a href="#"><i className="fab fa-linkedin"></i></a>
                                    <a href="#"><i className="fab fa-instagram-square"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
