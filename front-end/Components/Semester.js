import React from 'react'
import Colors from './Colors'

const Semester = ({courses, ecs}) => {
    console.log("in semester", courses.courseName)
    return (
    <div> 
       <div style={styles.coursesContainer}>
            {courses.courseName}
        </div>
        <div style={styles.ecContainer}>
            EC1
        </div>
    </div>
  )
}

let styles = {
    coursesContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'black',
        flexGrow: '1',

    },

    ecContainer: {
        display: 'flex',
        flexDirection: 'column-reverse',
        backgroundColor: 'gray',
    },
}

export default Semester