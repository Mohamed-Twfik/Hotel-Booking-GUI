import React, {useState} from 'react'
import Card from './Card'

// Import Single Room Images
import singleimage1 from '../Images/singlerooms/1.jpg'
import singleimage2 from '../Images/singlerooms/2.jpg'
import singleimage3 from '../Images/singlerooms/3.jpg'
import singleimage4 from '../Images/singlerooms/4.jpg'
import singleimage5 from '../Images/singlerooms/5.jpg'
import singleimage6 from '../Images/singlerooms/6.jpg'
import singleimage7 from '../Images/singlerooms/7.jpg'
import singleimage8 from '../Images/singlerooms/8.jpg'
import singleimage9 from '../Images/singlerooms/9.jpg'
import singleimage10 from '../Images/singlerooms/10.jpg'
import singleimage11 from '../Images/singlerooms/11.jpg'

// Import Double Room Images
import doubleimage1 from '../Images/doublerooms/1.jpg'
import doubleimage2 from '../Images/doublerooms/2.jpg'
import doubleimage3 from '../Images/doublerooms/3.jpg'
import doubleimage4 from '../Images/doublerooms/4.jpg'
import doubleimage5 from '../Images/doublerooms/5.jpg'
import doubleimage6 from '../Images/doublerooms/5.jpg'
import doubleimage7 from '../Images/doublerooms/7.jpg'
import doubleimage8 from '../Images/doublerooms/8.jpg'
import doubleimage9 from '../Images/doublerooms/9.jpg'
import doubleimage10 from '../Images/doublerooms/10.jpg'
import doubleimage11 from '../Images/doublerooms/11.jpg'
import doubleimage12 from '../Images/doublerooms/12.jpg'
import doubleimage13 from '../Images/doublerooms/13.jpg'
import doubleimage14 from '../Images/doublerooms/14.jpg'
import doubleimage15 from '../Images/doublerooms/15.jpg'
import doubleimage16 from '../Images/doublerooms/16.jpg'
import doubleimage17 from '../Images/doublerooms/17.jpg'

// Import Delux Room Images
import deluximage1 from '../Images/deluxrooms/1.jpg'
import deluximage2 from '../Images/deluxrooms/2.jpg'
import deluximage3 from '../Images/deluxrooms/3.jpg'
import deluximage4 from '../Images/deluxrooms/4.jpg'
import deluximage5 from '../Images/deluxrooms/5.jpg'
import deluximage6 from '../Images/deluxrooms/6.jpg'
import deluximage7 from '../Images/deluxrooms/7.jpg'


export default function Rooms() {
    const rooms = {
        single : [
            singleimage1,
            singleimage2,
            singleimage3,
            singleimage4,
            singleimage5,
            singleimage6,
            singleimage7,
            singleimage8,
            singleimage9,
            singleimage10,
            singleimage11
        ],
        double : [
            doubleimage1,
            doubleimage2,
            doubleimage3,
            doubleimage4,
            doubleimage5,
            doubleimage6,
            doubleimage7,
            doubleimage8,
            doubleimage9,
            doubleimage10,
            doubleimage11,
            doubleimage12,
            doubleimage13,
            doubleimage14,
            doubleimage15,
            doubleimage16,
            doubleimage17
        ],
        delux : [
            deluximage1,
            deluximage2,
            deluximage3,
            deluximage4,
            deluximage5,
            deluximage6,
            deluximage7 
        ]
    },
    singleCards = rooms.single.map((item, index) => {return <Card key={index} title='Single Room' image={item}/>}),
    doubleCards = rooms.double.map((item, index) => {return <Card key={index+rooms.single.length} title='Double Room' image={item}/>}),
    deluxCards = rooms.delux.map((item, index) => {return <Card key={index+rooms.single.length+rooms.double.length} title='Delux Room' image={item}/>})

    const [result, setResult] = useState(singleCards.concat(doubleCards, deluxCards))

    return (
        <div className="container text-center">

            <h1 className="my-5">Our Rooms</h1>
            
            {/* Filter bar */}
            <div className="row justify-content-around p-2" style={{border: "1px solid rgba(236, 188, 43, .3)"}}>
                <button className="btn all btn-warning text-light col-2" onClick={() => setResult(singleCards.concat(doubleCards, deluxCards))}>All</button>
                <button className="btn single btn-warning text-light col-2" onClick={() => setResult(singleCards)}>Single Rooms</button>
                <button className="btn double btn-warning text-light col-2" onClick={() => setResult(doubleCards)}>Double Rooms</button>
                <button className="btn Delux btn-warning  text-light col-2" onClick={() => setResult(deluxCards)}>Delux Rooms</button>
            </div>

            {/* Cards */}
            <div className="row justify-content-around my-5">
                {result}
            </div>

        </div>
    )
}
