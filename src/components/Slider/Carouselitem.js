import React, { Component } from 'react'

export default class Carouselitem extends Component {
    render() {
        var active = this.props.activate,
            image = this.props.image
        return (
            <div className={`carousel-item ${active}`}>
                <div className="row">
                    <div className="col-12">
                        <img src={image} className="d-block w-100"  alt="..."/>
                        <div className="container">
                            <div className="carousel-caption">
                                <div className="stars" style={{margin: "20px"}}>
                                    <span className="far fa-star"></span>
                                    <span className="far fa-star"></span>
                                    <span className="far fa-star"></span>
                                    <span className="far fa-star"></span>
                                    <span className="far fa-star"></span>
                                </div>
                                <p>Star Luxury Hotel</p>
                                <h1>Second slide label</h1>
                                <p>Some representative placeholder content for the first slide.</p>
                                <a className="nav-link navbtn" href="#"><span className="fa fa-calendar"></span> BOOK ONLINE</a>
                                <a className="nav-link navbtn" href="#"><span className="fa fa-calendar"></span> BOOK ONLINE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
