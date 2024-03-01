import React, { useContext } from 'react'
import Address from './Address'
import Image from './Image'
import Box from './Box'
import Button from './Button'
import Setting from './Setting'
import MyContext from '../context/MyContext'

const Basic = () => {
  const stateItem=useContext(MyContext)
  return (
    <>
    <div className='container'>
        <div className='circle'><img className='my-image' src='/img/bandanS.jpg'/></div>
        <h5 className='name'  style={{color:stateItem?.color}}>Name : Bandan Sahani</h5>
        <h5 className='work' style={{color:stateItem?.color}}>Software Developer</h5>
        <Address/>
        <Image/>
        <Box/>
        <Button/>
    </div>
    <Setting/>
    </>
  )
}

export default Basic