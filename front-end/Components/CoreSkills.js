//This iterates over the CoreSkill components and is responsible for the entire column of Row labels

import React from 'react'
import styles from '../styles/Map.module.css'
import CoreSkill from './CoreSkill'
import Colors from './Colors'

//TODO: skills array should be a parameter {skills} on line 31 and be read dynamically from DB
const skills = [
    {
        title: "Soft Skill",
        color: Colors.secondaryDarkest,
    },
    {
        title: "Life Long Learning",
        color: Colors.secondaryDark,
    },
    {
        title: "Special Technical Skills, Techniques, and Tools",
        color: Colors.secondaryMain,
    },
    {
        title: "Fundamental Knowledge & Concepts",
        color: Colors.secondaryLight,
    },
    {
        title: "Citizenship",
        color: Colors.secondaryLightest,
    },
]


const CoreSkills = ( ) => {
  return (
    <div className={styles.skills}>
       {skills.map((skill) =>
       (
            <>
                <CoreSkill
                   title={skill.title} 
                   color={skill.color}
                />
            </>
       ))} 
    </div>
  )
}

export default CoreSkills