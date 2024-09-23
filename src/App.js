import './App.css';
import FormTest from'./components/form'
import NumberList from'./components/NumberList'
import React,{useRef,useState} from 'react'
function App() {
 

const[titleImp,setTitleImp]=useState("")
const[yearImp,setYearImp]=useState("")

  const [data,setData]= useState(null)


   const handleSubmit = (e) =>{
    e.preventDefault();
    setData({yearImp,titleImp})
   

   
   //console.log(titleInp,yearInp)
    
   }
 

  return (
  <div>
   <form onSubmit={handleSubmit}>
      <div><label>Title : </label>
      <input type="text" name="title" required id="title" value={titleImp} onChange={e=>setTitleImp(e.target.value)}  />
      </div>
      <div>
      <label>year : </label>
      <input type="number" name="title" required id="title" value={yearImp} onChange={e=>setYearImp(e.target.value)} />
      </div>
     <button type="submit">click me </button>
    </form>
  {(titleImp.length === 0 && yearImp.length === 0)?<h3>no data ...</h3>:<div>
      {titleImp}<br />
      {yearImp}
    </div>}
 
 
 </div>  
  
  );
}

export default App;
