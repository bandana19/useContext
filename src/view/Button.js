import React, { useContext } from 'react'
import MyContext from '../context/MyContext'

const Button = () => {

  const changeColor=useContext(MyContext)
  return (
    <div>
        <button className='button-1' style={{color:changeColor?.button,backgroundColor:changeColor?.bgChange}}>Hire</button>
        <button className='button-2' style={{color:changeColor?.button1 ,backgroundColor:changeColor?.bgChange1}}>Thanks</button>
        <button className='button-3' style={{color:changeColor?.button2,backgroundColor:changeColor?.bgChange2}}>Anyway</button>
    </div>
  )
}

export default Button