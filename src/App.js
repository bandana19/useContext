
import { useState } from 'react';
import './App.css';
import Router from './router/Router';
import MyContext from './context/MyContext';

function App() {
// body
  const [isBlack, setIsBlack] = useState(true); 
  function handleButtonClick(){
    setIsBlack(!isBlack); 
    document.body.style.backgroundColor = isBlack ? 'white' : 'black'; 
  };
// 
//  basic name
 const [color, setColor] = useState("");
 function InputChangeColor(e){
   setColor(e.target.value); 
 }
//  button-1 color
 const [button,setButton]=useState("")
 function ChangeButtonColor(e){
  setButton(e.target.value)
 }
// button-1 bg
 const [bgChange,setBgChange]=useState("")
 function changeBgColor(e){
  setBgChange(e.target.value)
 }
 //  button-2 color
 const [button1,setButton1]=useState("")
 function ChangeButtonColor1(e){
  setButton1(e.target.value)
 }
// button-2 bg
 const [bgChange1,setBgChange1]=useState("")
 function changeBgColor1(e){
  setBgChange1(e.target.value)
 }
 //  button-3 color
 const [button2,setButton2]=useState("")
 function ChangeButtonColor2(e){
  setButton2(e.target.value)
 }
// button-3 bg
 const [bgChange2,setBgChange2]=useState("")
 function changeBgColor2(e){
  setBgChange2(e.target.value)
 }
// box-1
 const [changeBoxColor,setChangeBoxColor]=useState("")
 function boxBgColor(e){
  setChangeBoxColor(e.target.value)
 }
// box-2
 const [bgColor,setBgColor]=useState("")
 function backgroundColor(e){
  setBgColor(e.target.value)
 }
// 
//  box-3
 const [box3,setBox3]=useState("")
 function boxColor(e){
  setBox3(e.target.value)
 }
//  
// address
 const [detailsColor,setDetailsColor]=useState("")
 function handleChange(e){
  setDetailsColor(e.target.value)
 }
//  address bg
 const [detailsBg,setDetailsBg]=useState("")
 function backgroundDetails(e){
  setDetailsBg(e.target.value)
 }
//  
// image
 const [image,setImage]=useState(0)
 function changeImage(){
  setImage(image === 0 ? 1 : 0)
 }
  return (
      <MyContext.Provider value={{handleButtonClick,InputChangeColor,color,ChangeButtonColor,button,changeBgColor,bgChange,
       boxColor,box3,boxBgColor,changeBoxColor,bgColor,backgroundColor,handleChange,detailsColor,
       backgroundDetails,detailsBg,changeImage,image,button1,ChangeButtonColor1,bgChange1,changeBgColor1,button2,ChangeButtonColor2,
       bgChange2,changeBgColor2}}>
       <Router/>
      </MyContext.Provider>
  );
}

export default App;
