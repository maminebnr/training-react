import React from 'react'

export default function ListItem(props) {
  const {index,value} = props
  const handleCliclk= () =>{
    alert('Button clicked')
  }
    console.log("key item ",index)
  return (
    <div>
         <li>{index} - {value}</li>
    </div>
 
  )
}
