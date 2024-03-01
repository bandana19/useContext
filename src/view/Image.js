import React, { useContext } from 'react'
import MyContext from '../context/MyContext'

const Image = () => {
  const handleChangeImage=useContext(MyContext)
  return (
    <div>
     <div  className='image-box-1'><img className='my-image' src={handleChangeImage?.image === 0 ? "/img/bandanS.jpg" : '/img/ss.jpeg'}/></div> 
   
     <div  className='image-box-2'><img className='my-image' src={handleChangeImage?.image === 0 ? "/img/bandanS.jpg" : '/img/ss.jpeg'}/></div>  
     <div  className='image-box-3'><img className='my-image' src={handleChangeImage?.image === 0 ?"/img/bandanS.jpg" : '/img/ss.jpeg'}/></div> 
  
    </div>
  )
}

export default Image