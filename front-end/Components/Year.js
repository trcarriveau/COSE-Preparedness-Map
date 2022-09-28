import React from 'react'

const Year = ({color, yearNumber, studentClass}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', backgroundColor: color,  flexGrow: 1, margin: '10px',}}>
      
      <h1 style={{alignSelf: 'center'}}>Year {yearNumber} </h1>
      <h3 style={{alignSelf: 'center'}}> {studentClass} </h3>
    </div>
  )
}

export default Year