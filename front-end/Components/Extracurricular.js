import React from 'react'
import Colors from './Colors'

const Extracurricular = ({ecName, description, skills, types, year_semester, is_ec, temp_trait}) => {
  return (
    <div 
        style={{
            display: 'flex',
            backgroundColor: Colors.ecYellow,
            color: 'black',
            justifyContent: 'center',
            borderRadius: '10px', 
            alignItems: 'center',
            width: '90%',
            margin: '2px',
        }}>
            {ecName}
            
    </div>
  )
}

export default Extracurricular