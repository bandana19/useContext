
import react, { useState } from 'react';
import './App.css';
import Todolist from './view/Todolist';
import Modalbox from './view/Modalbox';
import Form from './view/form';

function App() {
  const [arr, setArr] = useState([])

  const [modalShow, setModalShow] = useState(false);

  const [task, setTask] = useState("")
  const [status, setStatus] = useState("")
  const [deadline, setDeadline] = useState("")
  const [index,setIndex]=useState(-1)


  function handleClick() {
    let newArr = [...arr, { task, status, deadline }]
    setArr(newArr)
    setModalShow(false)
  }

  function deleteItem(index) {
    let tempArr=[...arr]
    let DeleteData=tempArr.filter((_,id)=>id!==index)
    setArr(DeleteData)
  }

   function editDetails(obj,index){
    setTask(obj.task)
    setStatus(obj.status)
    setDeadline(obj.deadline)
    setModalShow(true)
    setIndex(index)
   }

    function UpDataName(){
      let upDateData=[...arr]
      upDateData[index]={
        task, status, deadline
      }
      setArr(upDateData)
      setModalShow(false)
    }


  return (
    <div>
      <Todolist arr={arr} setTask={setTask} setStatus={setStatus} setDeadline={setDeadline} editDetails={editDetails}
      handleClick={handleClick}  deleteItem={deleteItem}/>
      <p><button className='btn btn-warning add-button'
        onClick={() => setModalShow(true)}>Add Item</button></p>
      <Modalbox handleClick={handleClick} UpDataName={UpDataName}

        content={() => <Form
          setDeadline={setDeadline}
          setTask={setTask}
          setStatus={setStatus}
          task={task}
          status={status}
          deadline={deadline}
        />}
        show={modalShow}
        onHide={() => setModalShow(false)} />
    </div>
  );
}

export default App;
