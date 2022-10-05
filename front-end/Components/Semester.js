//This is a component to hold the contents of a single courses and ecs component 
//It will display their output on a particular fall/spring rectangle on the career-map

import React from 'react'
import Colors from './Colors'
import Courses from './Courses'
import Extracurriculars from './Extracurriculars'


const Semester = () => {
    
    return (
    <div style={styles.semester}> 
       <div style={styles.coursesContainer}>
            <Courses /> 
        </div>
        <div style={styles.ecContainer}>
            <Extracurriculars />
        </div>
    </div>
  )
}

let styles = {
    coursesContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    ecContainer: {
        display: 'flex',
        flexDirection: 'column-reverse',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    
    semester: {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        width: '50%',
    }
}

export default Semester