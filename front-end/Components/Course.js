//component responsible for display of a single course on on the map
import React from 'react'
import Colors from './Colors'

//temp trait is a stand in until we have functional type icons and labels using types component
const Course = ({courseName, description, skills, types, year_semester, is_ec, temp_trait}) => {
    return (
    // <div style={styles.courseContainer}>
   
    <div 
        style={{
            display: 'flex',
            backgroundColor: Colors.course,
            color: 'white',
            justifyContent: 'space-between',
            borderRadius: '10px', 
            alignItems: 'center',
            width: '90%',
            margin: '2px',
    }}> 
        <div
            style={{
                display: 'flex',
                marginLeft: '10px',
                flexDirection: 'row',
                gap: '5px'
             }}>
            {temp_trait}
            {types}

        </div>
        <div>
            {courseName}
        </div>
        {/* Nothing to display below  Just used for justify-content space-between  */}
        <div
            style={{
                display: 'flex',
                marginRight: '10px',
            }}>
            <></>
        </div>
    </div>

  )
}

let styles = {
    courseContainer: {
        display: 'flex',
        backgroundColor: Colors.course,
        color: 'white',
        justifyContent: 'center',
        borderRadius: '10px'
        // width: '100px',
        // height: '25px',
    }
}


export default Course