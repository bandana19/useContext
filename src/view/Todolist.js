import React from 'react'
import Detailslist from './Detailslist'

const Todolist = ({ arr,deleteItem,editDetails }) => {
  
    return (
        <div>
            <h1 className='todo-list'>Todo List</h1>
            <div className='row list'>Todo List</div>
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>status</th>
                        <th>Deadline</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <Detailslist arr={arr}  deleteItem={deleteItem} editDetails={editDetails}/>
                </tbody>
            </table>

           

            

        </div>

    )
}

export default Todolist