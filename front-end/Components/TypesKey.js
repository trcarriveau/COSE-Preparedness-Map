import Type from './Type'
import styles from '../styles/Map.module.css'

//icons (from react-icons)
import {RiComputerFill} from 'react-icons/ri'
import {GiArchiveResearch} from 'react-icons/gi' 
import {GrGroup} from 'react-icons/gr'
import {BsTriangleFill} from 'react-icons/bs'
import {HiUserGroup} from 'react-icons/hi'
import {GiCube} from 'react-icons/gi'

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
      "type_icon": <GiArchiveResearch style={{color: 'red'}}></GiArchiveResearch>,
      "type_color": 'red'
  },
  {
    "type_map": "Software Engineering",
    "type_name": "Group-based Semester Long Industry-Directed Projects",
    "type_information": "",
    "type_icon": <HiUserGroup style={{color: 'black' }}></HiUserGroup>, 
    "type_color": 'orange' 
  },
  {
    "type_map": "Software Engineering",
    "type_name": "Research Activities",
    "type_information": "",
    "type_icon": <BsTriangleFill style={{color: 'green'}}></BsTriangleFill>, 
    "type_color": 'orange' 
  },
  {
    "type_map": "Software Engineering",
    "type_name": "Professional Working Experience",
    "type_information": "",
    "type_icon": <GiCube style={{color: 'gray', }}></GiCube>, 
    "type_color": 'orange' 
  },
]

//TODO figure out spacing on Type component so icon and text in key are not pushed together
const TypesKey = () => {
  return (
    <div className={styles.keyRow}>
      <div className={styles.keyText}>
        {types.map((type) =>
        (
            <> 
                <Type 
                  type_icon = {type.type_icon}
                  type_name = {type.type_name}
                />
            </>
        ))}
      </div>
    </div>


  )
}

export default TypesKey

//Test Code from initial work on type 
    // <div>      
    //     <GrGroup></GrGroup>
    //     {type_name}
        
    //     <h3>
    //         <type.type_icon/>
    //         {type.type_map}
    //         <Icon/>
    //         type testing after variable
        
    //     </h3>
    // </div>