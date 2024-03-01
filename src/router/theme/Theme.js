import React, { useContext } from 'react'
import MyContext from '../../context/MyContext'

const Theme = () => {
    const stateName=useContext(MyContext)
  return (
    <div>Theme </div>
  )
}

export default Theme