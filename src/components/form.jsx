import React from 'react'

export default function FormTest(props) {
  const numbers = [1, 2, 3, 4, 5]
  return (
    <div>This is my {props.title} ! 
     {numbers.map((number,index)=>(
      <li>{number} - {index}</li>
     ))}
     </div>
    
  )
}
