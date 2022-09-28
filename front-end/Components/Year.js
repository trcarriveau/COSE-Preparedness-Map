import React from 'react'

const Year = ({color, yearNumber, studentClass}) => {
  return (
    <>
      {/* style={{backgroundColor: color}} */}
      <p>Year {yearNumber} </p>
      <p> {studentClass} </p>
    </>
  )
}

export default Year