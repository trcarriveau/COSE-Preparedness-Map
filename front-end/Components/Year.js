import React from 'react'

const Year = ({color, yearNumber, studentClass, has_summer}) => {
  return (
    <div style={{
      display: 'flex', 
      flexDirection: 'column', 
      backgroundColor: color,  
      flexGrow: has_summer ? 3 : 2, 
      margin: '10px',}}>
      
      <h1 style={{alignSelf: 'center'}}>Year {yearNumber} </h1>
      <h3 style={{alignSelf: 'center'}}> {studentClass} </h3>
    </div>
  )
}

export default Year