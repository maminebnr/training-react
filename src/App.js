import './App.css';
import FormTest from'./components/form'
import NumberList from'./components/NumberList'
import React,{useRef,useState} from 'react'
function App() {
  const numbers = [1, 2, 3, 4, 5]
  //create refs for input fields 
  const nameRef = useRef()
  const emailRef = useRef()
  const ageRef = useRef()
  const [details,setDetails]= useState(null)

  const handleSubmit = (e) =>{
    e.preventDefault()
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const age = ageRef.current.value;
    setDetails({name,email,age})

  }

  return (
  <div>

   <FormTest title="my freind "/> 
{   <NumberList items={numbers}/>
 }  
 
 
 </div>  
  
  );
}

export default App;
