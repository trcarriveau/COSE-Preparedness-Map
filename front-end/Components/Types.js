//This component receives an array of Type components from database and iterates through them
import React from 'react'

import Type from './Type'

//oid sent from at least one component level up--> courses 
const types1 = [     
      {
        "_id": {
          "$oid": "632bb5313b2e349d9cfebcbd"
        },
        "type_map": "Software Engineering",
        "type_name": "Labs & Experimental Learning (ISELF VizLab)",
        "type_information": "",
        "type_icon": "URL for icon or path to it on the server"
      },{
        "_id": {
          "$oid": "632bb5f20e17f09d9c34c023"
        },
        "type_map": "Software Engineering",
        "type_name": "Read Search & Discuss (Exploratory assignment: literature review + oral presentaion + report)",
        "type_information": "",
        "type_icon": "URL for icon or path to it on the server"
      },{
        "_id": {
          "$oid": "632bb5fd0e17f09d9c34c024"
        },
        "type_map": "Software Engineering",
        "type_name": "Group-based Semester Long Industry-Directed Projects",
        "type_information": "",
        "type_icon": "URL for icon or path to it on the server"
      },{
        "_id": {
          "$oid": "632bb60a0e17f09d9c34c025"
        },
        "type_map": "Software Engineering",
        "type_name": "Research Activities",
        "type_information": "",
        "type_icon": "URL for icon or path to it on the server"
      },{
        "_id": {
          "$oid": "632bb6160e17f09d9c34c026"
        },
        "type_map": "Software Engineering",
        "type_name": "Professional Working Experience",
        "type_information": "",
        "type_icon": "URL for icon or path to it on the server"
      }
   ]

const types = [
    {
        "type_map": "Software Engineering",
        "type_name": "Professional Working Experience",
        "type_information": "",
        "type_icon": "URL for icon or path to it on the server"
    }
]
    

const Types = () => {
  return (
    <div>Types Area Testing</div>
  )
}

export default Types