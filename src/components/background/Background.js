import React from 'react'
import './Background.scss'
import TakePicture from './TakePicture'

const Background = ({background}) => {
  return (
    <div className='background'>
    <div className='overlay'></div>
    <TakePicture situation={background}/>
    </div>
  )
}

export default Background       