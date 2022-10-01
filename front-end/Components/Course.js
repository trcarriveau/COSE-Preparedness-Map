import React from 'react'
import Colors from './Colors'

const Course = ({courseName}, {trait}) => {
  return (
    <div style={styles.courseContainer}>
        {courseName}
    </div>

  )
}

let styles = {
    courseContainer: {
        display: 'flex',
        backgroundColor: Colors.courseBlue,
        color: 'white',
        justifyContent: 'center',
        borderRadius: '10px'
        // width: '100px',
        // height: '25px',
    }
}


export default Course