import React from 'react'

const Year = ({color, yearNumber, studentClass}) => {
  return (
    <div style={{ backgroundColor: color }}>
      
      <p>Year {yearNumber} </p>
      <p> {studentClass} </p>
    </div>
  )
}

export default Year