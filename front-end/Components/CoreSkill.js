//Individual component responsible for row label on the career map 

import React from 'react'

//TODO: Consider using style component to adjust opacity from a single secondary color using an opacity
//variable passed along with color

const CoreSkill = ({title, color}) => {
  return (
    <div 
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: color,
        margin: '2px'
      }}>
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
    </div>
  )
}

export default CoreSkill