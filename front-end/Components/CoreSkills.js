//This iterates over the CoreSkill components and is responsible for the entire column of Row labels

import React from 'react'
import styles from '../styles/Map.module.css'
import CoreSkill from './CoreSkill'
import Colors from './Colors'

const skill_colors = [
    Colors.secondaryDarkest,
    Colors.secondaryDark,
    Colors.secondaryMain,
    Colors.secondaryLight,
    Colors.secondaryLightest,
]

const CoreSkills = ({ skills }) => {
  return (
    <div className={styles.skills} style={{backgroundColor: Colors.background}}>
       {skills.map((skill, index) =>
       (
            <>
                <CoreSkill
                   title={skill.skill_name} 
                   color={skill_colors[index % skill_colors.length]}
                />
            </>
       ))} 
    </div>
  )
}

export default CoreSkills