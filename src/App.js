import './App.css';
import FormTest from'./components/form'
import NumberList from'./components/NumberList'
import React,{useRef,useState} from 'react'
function App() {
 
  const titleImpl = useRef()
  const yearImp = useRef()

  const [data,setData]=useState(null)


   const handleSubmit = (e) =>{
    e.preventDefault();
    const title = titleImpl.current.value;
    const year = yearImp.current.value
    setData({titleImpl:title,yearImp:year})
    titleImpl.current.value = ""
    yearImp.current.value =""
   

   
   //console.log(titleInp,yearInp)
    
   }
 

  return (
  <div>
   <form onSubmit={handleSubmit}>
      <div><label>Title : </label>
      <input type="text" name="title" required id="title" ref={titleImpl}    />
      </div>
      <div>
      <label>year : </label>
      <input type="number" name="title" required id="title" ref={yearImp}  />
      </div>
     <button type="submit">click me </button>
    </form>
  {!data?<h3>No Data Found ...</h3>:
  <div>
      <h3>{data.titleImpl}</h3>
      <h3>{data.yearImp}</h3>  
  </div>}
  
 </div>  
  
  );
}

export default App;
