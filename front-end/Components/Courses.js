//Component responsible for iterating through a list of course components 
//and displaying them in a column

import React from 'react'

import styles from '../styles/Map.module.css'
import Course from './Course'
import Types from './Types'

//icons (from react-icons)
import {RiComputerFill} from 'react-icons/ri'


//TODO: Replace courses array with DB and update temp_trait call on line 94 to use type components
//Placeholder this will be a parameter and received from DB 
const courses =  [
        {
            "item_name": "SE 221",
            "item_description": "", 
            "item_type": [
                {
                  "type_id": {
                    "$oid": "632bb5313b2e349d9cfebcbd"
                  }
                },
                {
                  "type_id": {
                    "$oid": "632bb5f20e17f09d9c34c023"
                  }
                },
                {
                  "type_id": {
                    "$oid": "632bb5fd0e17f09d9c34c024"
                  }
                }
              ],
              "is_extra_curricular": false
        },
        {
            "item_name": "SE 250",
            "item_description": "", 
            "item_type": [
                {
                  "type_id": {
                    "$oid": "632bb5313b2e349d9cfebcbd"
                  }
                },
                {
                  "type_id": {
                    "$oid": "632bb5f20e17f09d9c34c023"
                  }
                },
                {
                  "type_id": {
                    "$oid": "632bb5fd0e17f09d9c34c024"
                  }
                }
              ],
              "is_extra_curricular": false
        },
        {
            "item_name": "SE 342",
            "item_description": "", 
            "item_type": [
                {
                  "type_id": {
                    "$oid": "632bb5313b2e349d9cfebcbd"
                  }
                },
                {
                  "type_id": {
                    "$oid": "632bb5f20e17f09d9c34c023"
                  }
                },
                {
                  "type_id": {
                    "$oid": "632bb5fd0e17f09d9c34c024"
                  }
                }
              ],
              "is_extra_curricular": false
        },
    ]



const Courses = () => {
  return (
    // <div className={styles.semester}>
    <>
         {courses.map((course) =>
         (
            // <div style={{width: '100%', alignContent: 'center', justifyContent: 'center'}}>
            <>
                <Course
                  courseName={course.item_name} 
                //   temp_trait={<RiComputerFill style={{color: 'orange'}}/>} 
                  types={<Types/>}
                  RG_var={'fghjk'}
                />
            </>
         ))}
    </>
  )
}

export default Courses