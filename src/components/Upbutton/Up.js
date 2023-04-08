import React from 'react'
import {useState} from 'react'
import './style.css'

export default function Up() {
    const [check, setCheck] = useState('none')
    window.onscroll = () => {
        if(window.scrollY >= 1000) {
            setCheck('block')
        } else {
            setCheck('none')
        }
    }

    return (
        <a href="#nav"><div id="scroll" style={{display: check}}>^</div></a>
    )
}
