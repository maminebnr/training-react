import React from 'react'
import ListItem from'./ListItem'
import Button from './Button'
export default function NumberList({items}) {
    const numbers = items;
    console.log("numbers",numbers)
    const handleCliclk= () =>{
      alert('Button clicked')
    }
  return (
    <div>
{
        
        numbers.map((number,key)=>{
          return (
            <div key={key}>
              <ListItem index={key} value={number} />
              <Button label="click me" onClick={handleCliclk} />
            </div>
          )
         })
        }
    </div>
    
  )
}
