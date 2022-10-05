//This component receives an array of Type components and iterates through them
//Should be able to display the icons for the array of $oids sent to it from a course
import React from 'react'

import Type from './Type'
//icons (from react-icons)
import {RiComputerFill} from 'react-icons/ri'
import {GiArchiveResearch, GiConsoleController, GiFlexibleLamp} from 'react-icons/gi' 

//copies of dummy data   this needs to be tweaked to work correctly with database data
//oid sent from at least one component level up--> courses 
// const types1 = [     
//       {
//         "_id": {
//           "$oid": "632bb5313b2e349d9cfebcbd"
//         },
//         "type_map": "Software Engineering",
//         "type_name": "Labs & Experimental Learning (ISELF VizLab)",
//         "type_information": "",
//         "type_icon": "URL for icon or path to it on the server"
//       },{
//         "_id": {
//           "$oid": "632bb5f20e17f09d9c34c023"
//         },
//         "type_map": "Software Engineering",
//         "type_name": "Read Search & Discuss (Exploratory assignment: literature review + oral presentaion + report)",
//         "type_information": "",
//         "type_icon": "URL for icon or path to it on the server"
//       },{
//         "_id": {
//           "$oid": "632bb5fd0e17f09d9c34c024"
//         },
//         "type_map": "Software Engineering",
//         "type_name": "Group-based Semester Long Industry-Directed Projects",
//         "type_information": "",
//         "type_icon": "URL for icon or path to it on the server"
//       },{
//         "_id": {
//           "$oid": "632bb60a0e17f09d9c34c025"
//         },
//         "type_map": "Software Engineering",
//         "type_name": "Research Activities",
//         "type_information": "",
//         "type_icon": "URL for icon or path to it on the server"
//       },{
//         "_id": {
//           "$oid": "632bb6160e17f09d9c34c026"
//         },
//         "type_map": "Software Engineering",
//         "type_name": "Professional Working Experience",
//         "type_information": "",
//         "type_icon": "URL for icon or path to it on the server"
//       }
//    ]

const types = [
    {
        "type_map": "Software Engineering",
        "type_name": "Professional Working Experience",
        "type_information": "",
        "type_icon": <RiComputerFill style={{color: 'gray'}}/>, 
        "type_color": 'orange' 
    },
    {
        "type_map": "Software Engineering",
        "type_name": "Read Search & Discuss (Exploratory assignment: literature review + oral presentaion + report)",
        "type_information": "",
        "type_icon": <GiArchiveResearch />,
        "type_color": 'red'
    },
]
console.log("In Types", types, )  

//TODO: Learn to pass color component and update icon coloring
//TODO: Check on centering of text in course component when there are multiple types
const Types = () => {
  return (
    <>
        {types.map((type) => 
        (
            <div>
              <Type
                type_icon={type.type_icon}
                type_icon2={type.type_icon}
                type_color={type.type_color}
              />
            </div>
        ))}
    </>
  )
}

export default Types