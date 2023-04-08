import React, { Component } from 'react'
import '../css/style.css'

import image1 from '../Images/1.jpg'
import image2 from '../Images/2.jpg'
import image3 from '../Images/3.jpg'
import Carouselitem from './Carouselitem'

export default class Slider extends Component {
    render() {
        return (
            <header>
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <Carouselitem activate="active" image={`${image1}`}/>
                        <Carouselitem image={`${image2}`}/>
                        <Carouselitem image={`${image3}`}/>
                    </div> 
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </header>
    
        )
    }
}
