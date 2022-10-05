//This component iterates through Extracurricular objects and is used for displaying them within 
//a one semester grid space 

import React from 'react'
import Extracurricular from './Extracurricular'
import styles from '../styles/Map.module.css'

//TODO: convert ecs const to db values and pass down as props 

const ecs = [
    {
        ecName: 'test'
    },
    {
        ecName: 'test2'
    },
]

const Extracurriculars = () => {
  return (
    <>
        {ecs.map((ec) =>
            (
            <>
                <Extracurricular
                    ecName={ec.ecName} 
                
                />
            </>
            ))}
    </>
  )
}

export default Extracurriculars