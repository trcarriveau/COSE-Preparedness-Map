
import styles from "../styles/Map.module.css"

//internal components
import Year from "../components/Year";
import CoreSkill from "../components/CoreSkill";
import CoreSkills from "../components/CoreSkills";
import Colors from "../components/Colors";
import Course from "../components/Course";
import Courses from "../components/Courses";
import Extracurricular from "../components/Extracurricular";
import Season from "../components/Season";
import Seasons from "../components/Seasons";
import Semester from "../components/Semester";
import Type from "../components/Type";
import Years from "../Components/Years";

//icons (from react-icons)
import {RiComputerFill} from 'react-icons/ri'
import {GiArchiveResearch} from 'react-icons/gi' 
import {GrGroup} from 'react-icons/gr'
import {BsTriangleFill} from 'react-icons/bs'
import {HiUserGroup} from 'react-icons/hi'
import {GiCube} from 'react-icons/gi'

//test data for types 
import type_data from '../components/test_objects/cose-types.json'

import { useState} from 'react'
import Types from "../components/Types";
import Extracurriculars from "../components/Extracurriculars";
import SemestersRow from "../components/SemestersRow";
import TypesKey from "../components/TypesKey";



function Map() {

  
  //testing reading JSON info 
  const [types, setTypes] = useState(
    {
        type_map: "Software Engineering",
        type_name: "Labs & Experimental Learning (ISELF VizLab)",
        type_information: "",
        type_icon: GrGroup  
    }

  )

  const [skills, setSkills] = useState (
    [{
        "_id": {
          "$oid": "632bb4433b2e349d9cfebcba"
        },
        "skill_map": "Software Engineering",
        "skill_name": "Soft Skills",
        "skill_information": ""
      },{
        "_id": {
          "$oid": "632bb4db0e17f09d9c34c01f"
        },
        "skill_map": "Software Engineering",
        "skill_name": "Life Long Learning",
        "skill_information": ""
      },{
        "_id": {
          "$oid": "632bb5080e17f09d9c34c020"
        },
        "skill_map": "Software Engineering",
        "skill_name": "Special Technical Skills, Techniques and Tools",
        "skill_information": ""
      },{
        "_id": {
          "$oid": "632bb5120e17f09d9c34c021"
        },
        "skill_map": "Software Engineering",
        "skill_name": "Fundamental Knowledge & Concepts",
        "skill_information": ""
      },{
        "_id": {
          "$oid": "632bb51b0e17f09d9c34c022"
        },
        "skill_map": "Software Engineering",
        "skill_name": "Citizenship",
        "skill_information": ""
      }]
  )

  console.log(type_data)

  return (
    <div style={{backgroundColor: Colors.background}}>    
        <Years />
        <Seasons total_years={4} />

        <div className={styles.middle} style={{backgroundColor: Colors.background}}>
            <CoreSkills 
                skills = {skills}
            />
            <div className={styles.semesters_all}>
                {/* //TODO: Add a Width/Years Variable if expanding beyond 4 years */}
                
                {/* ******************** Core Skill 1 ************************ */}

                <SemestersRow
                    total_years={4}
                />
                {/* ******************** Core Skill 2 ************************ */}
               
                <SemestersRow
                    total_years={4}
                />
                {/* ******************** Core Skill 3 ************************ */}
              
                <SemestersRow
                    total_years={4}
                />
                {/* ******************** Core Skill 4 ************************ */}
            
                <SemestersRow
                    total_years={4}
                />

                 {/* ******************** Core Skill 5 ************************ */}
                
                <SemestersRow
                    total_years={4}
                />
           
           </div>         
        </div>
        {/*TODO styles.key area needs to be converted to component to iterate through types */}
        <div className={styles.key}>
            <TypesKey />

            {/* **************TESTING AREA********* */}


            {/* **************TESTING AREA********* */}
                
            <div className={styles.typeKey}>             
                <div className={styles.keyRow}>
                    <div className={styles.box} style={{backgroundColor: Colors.course}}>     
                    </div>
                    <div className={styles.keyText}>Course</div>
                </div>
                <div className={styles.keyRow}>
                    <div className={styles.box} style={{backgroundColor: Colors.ec}} >
                    </div>
                    <div className={styles.keyText}>Extracurricular</div>
                </div>
            </div>
        </div>
    </div>


  );
}

export default Map;
