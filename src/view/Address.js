import React, { useContext } from 'react'
import MyContext from '../context/MyContext'

const Address = () => {
  const data = useContext(MyContext)
  return (
    <div className='description-list'>
      <p className='introduction' style={{ color: data?.detailsColor, backgroundColor: data?.detailsBg }}> Hii ,<br />
        "My name is Bandana Sahani.
        <br /> I reside in Bhatni Bujurg. My father, Pataru Sahani, is a farmer. I am a software developer."</p>
    </div>
  )
}

export default Address