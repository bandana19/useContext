import React, { useContext } from 'react'
import MyContext from '../context/MyContext'

const Box = () => {
  const handleChange=useContext(MyContext)
  return (
    <div>
        <div className='box-1' style={{backgroundColor:handleChange?.changeBoxColor}}></div>
        <div className='box-2' style={{backgroundColor:handleChange?.bgColor}}></div>
        <div className='box-3' style={{backgroundColor:handleChange?.box3}}></div>
    </div>
  )
}

export default Box