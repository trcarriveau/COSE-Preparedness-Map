import React from 'react'
import Extracurricular from './Extracurricular'
import styles from '../styles/Map.module.css'

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