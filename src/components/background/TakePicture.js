import React from 'react'
import Rainy from '../images/Rainy.jpg'
import Cloudy from '../images/Cloudy.jpg'
import Sunny from '../images/Sunny.jpg'
import Rainbow from '../images/Rainbow.jpg'


const TakePicture = ({situation}) => {


    switch(situation){
        case "Rain" :
            return <img className='background' src={Rainy} alt='yağmurlu'/>
        case "Clouds" :
            return <img className='background' src={Cloudy} alt='bulutlu'/>
        case "Clear" :
            return <img className='background' src={Sunny} alt='güneşli'/>
            
        default:
            return <img className='background-image' src={Rainbow} alt='gökkuşağı'/>
    }
}

export default TakePicture