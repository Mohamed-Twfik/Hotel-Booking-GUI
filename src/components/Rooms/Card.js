import React, { useContext } from 'react'
import { CountContext } from '../../App'

export default function Card(props) {
    const {count, setcount} = useContext(CountContext)
    return (
            
        <div className="card col-4 my-5" style={{width: "21rem",overflow: 'hidden'}}>
            <img src={props.image} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a className="btn btn-warning text-light" onClick={() => setcount(count+1)} id="event">Booking Now</a>
            </div>
        </div>
    
    
)
}
