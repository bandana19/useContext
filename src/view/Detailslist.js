import React, { useState } from 'react'

const Detailslist = ({ arr,deleteItem,editDetails}) => {
   
    return (
        <>
           { 
           arr.map((item,index)=>(
           <tr>
                <td>{item.task}</td>
                <td>{item.status}</td>
                <td>{item.deadline}</td>
                <td><button className='btn btn-primary' onClick={()=>editDetails(item,index)}>Edit</button>
                    <button className='btn btn-danger' onClick={()=>deleteItem(index)}> Delete</button></td>
            </tr>
           )) 
        }
        </>
    )
}

export default Detailslist