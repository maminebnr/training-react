import './App.css';
import FormTest from'./components/form'
import NumberList from'./components/NumberList'
import React,{useRef,useState} from 'react'
function App() {
 
  const titleImp = useRef()
  const yearImp = useRef()

  const [data,setData]= useState(null)


   const handleSubmit = (e) =>{
    e.preventDefault();
    const title = titleImp.current.value
    const year = yearImp.current.value
    setData({titleImp:title,yearImp:year})
    titleImp.current.value = ""
    yearImp.current.value = ""

   
   //console.log(titleInp,yearInp)
    
   }
 

  return (
  <div>
   <form onSubmit={handleSubmit}>
      <div><label>Title : </label>
      <input type="text" name="title" required id="title" ref={titleImp}  />
      </div>
      <div>
      <label>year : </label>
      <input type="number" name="title" required id="title" ref={yearImp} />
      </div>
     <button type="submit">click me </button>
    </form>
  {!data?<h3>no data ...</h3>:<div>
      {data.titleImp}<br />
      {data.yearImp}
    </div>}
 
 
 </div>  
  
  );
}

export default App;
