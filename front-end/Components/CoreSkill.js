import React from 'react'

const CoreSkill = ({title, color}) => {
  return (
    <h1 style={{display: 'flex', backgroundColor: color, width: '95%', height: '180px' }}>
        {title}
    </h1>
  )
}

export default CoreSkill