import React from 'react'

const CoreSkill = ({title, color}) => {
  return (
    <h2 
        style={{
            display: 'flex',
            backgroundColor: color, 
            width: '95%', 
            height: '180px', 
            justifyContent: 'center', 
            alignItems: 'center',

        }}
    >
        {title}
    </h2>
  )
}

export default CoreSkill