
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



  console.log(type_data)

  return (
    <div>    
        <Years />
        <Seasons total_years={4} />

        <div className={styles.middle}>
            <CoreSkills />
            <div className={styles.semesters_all}>
                {/* //TODO: Add a Width/Years Variable if expanding beyond 4 years */}
                
                {/* ******************** Core Skill 1 ************************ */}
                <div className={styles.semesters_by_skill}>
                    <div className={styles.semesters}>   
                        <div className={styles.semester}> 
                            <Course
                                courseName={'SE 221'}
                                temp_trait={<RiComputerFill style={{color: 'orange'}}/>}
                            />
                            <Course
                                courseName={'SE 231'}
                                temp_trait={<HiUserGroup style={{color: 'black'}}/>}    
                            />
                            <Extracurricular
                                ecName={'Hackathons'}
                            />
                        </div>
                        {/* Test of Courses component at Year1/Spring && CoreSkill 1 */}
                        <Courses/>
                        
                    </div>  
                    <div className={styles.semesters}>   
                        <div className={styles.semester}> 
                            test fall2
                        </div>
                        <div className={styles.semester}> 
                            <Course
                                    courseName={'SE 221'}
                                    temp_trait={<RiComputerFill style={{color: 'orange'}}/>}
                                />
                                <Course
                                    courseName={'SE 231'}
                                    temp_trait={<HiUserGroup style={{color: 'black'}}/>}    
                                />
                                <Extracurricular
                                    ecName={'Hackathons'}
                                />
                        </div>
                    </div>  
                    <div className={styles.semesters}>   
                        <div className={styles.semester}> 
                            test fall1
                        </div>
                        <div className={styles.semester}> 
                            test spring1
                        </div>
                    </div>  
                    <div className={styles.semesters}>   
                        <div className={styles.semester}> 
                            test fall2
                        </div>
                        <div className={styles.semester}> 
                            test spring2
                        </div>
                    </div>  
                </div> 

                {/* ******************** Core Skill 2 ************************ */}
                <div className={styles.semesters_by_skill}>
                    <div className={styles.semesters}>   
                        <div className={styles.semester}> 
                            skill 2 test fall1
                        </div>
                        <div className={styles.semester}> 
                            skill 2 test spring1
                        </div>
                    </div>  
                    <div className={styles.semesters}>   
                        <div className={styles.semester}> 
                            test fall2
                        </div>
                        <div className={styles.semester}> 
                            test spring2
                        </div>
                    </div>  
                    <div className={styles.semesters}>   
                        <div className={styles.semester}> 
                            test fall1
                        </div>
                        <div className={styles.semester}> 
                            test spring1
                        </div>
                    </div>  
                    <div className={styles.semesters}>   
                        <div className={styles.semester}> 
                            test fall2
                        </div>
                        <div className={styles.semester}> 
                            test spring2
                        </div>
                    </div>  
                </div> 

                {/* ******************** Core Skill 3 ************************ */}
                <div className={styles.semesters_by_skill}>
                    <div className={styles.semesters}>   
                        <div className={styles.semester}> 
                            skill 3 test fall1
                        </div>
                        <div className={styles.semester}> 
                            skill 3 test spring1
                        </div>
                    </div>  
                    <div className={styles.semesters}>   
                        <div className={styles.semester}> 
                            test fall2
                        </div>
                        <div className={styles.semester}> 
                            test spring2
                        </div>
                    </div>  
                    <div className={styles.semesters}>   
                        <div className={styles.semester}> 
                            test fall1
                        </div>
                        <div className={styles.semester}> 
                            test spring1
                        </div>
                    </div>  
                    <div className={styles.semesters}>   
                        <div className={styles.semester}> 
                            test fall2
                        </div>
                        <div className={styles.semester}> 
                            test spring2
                        </div>
                    </div>  
                </div> 
                {/* ******************** Core Skill 4 ************************ */}
                <div className={styles.semesters_by_skill}>
                    <div className={styles.semesters}>   
                        <div className={styles.semester}> 
                            skill 4 test fall1
                        </div>
                        <div className={styles.semester}> 
                            skill 4 test spring1
                        </div>
                    </div>  
                    <div className={styles.semesters}>   
                        <div className={styles.semester}> 
                            test fall2
                        </div>
                        <div className={styles.semester}> 
                            test spring2
                        </div>
                    </div>  
                    <div className={styles.semesters}>   
                        <div className={styles.semester}> 
                            test fall1
                        </div>
                        <div className={styles.semester}> 
                            test spring1
                        </div>
                    </div>  
                    <div className={styles.semesters}>   
                        <div className={styles.semester}> 
                            test fall2
                        </div>
                        <div className={styles.semester}> 
                            test spring2
                        </div>
                    </div>  
                </div>            
                 {/* ******************** Core Skill 5 ************************ */}
                 <div className={styles.semesters_by_skill}>
                    <div className={styles.semesters}>   
                        <div className={styles.semester}> 
                            skill 5 test fall1
                        </div>
                        <div className={styles.semester}> 
                            skill 5 test spring1
                        </div>
                    </div>  
                    <div className={styles.semesters}>   
                        <div className={styles.semester}> 
                            test fall2
                        </div>
                        <div className={styles.semester}> 
                            test spring2
                        </div>
                    </div>  
                    <div className={styles.semesters}>   
                        <div className={styles.semester}> 
                            test fall1
                        </div>
                        <div className={styles.semester}> 
                            test spring1
                        </div>
                    </div>  
                    <div className={styles.semesters}>   
                        <div className={styles.semester}> 
                            test fall2
                        </div>
                        <div className={styles.semester}> 
                            test spring2
                        </div>
                    </div>  
                </div>           
           
           </div>

            

            
        
        </div>
        {/*TODO styles.key area needs to be converted to component to iterate through types */}
        <div className={styles.key}>
            <div className={styles.typeKey}>
                <div className={styles.keyRow}>
                    <RiComputerFill style={{color: 'orange'}}></RiComputerFill>
                    <div className={styles.keyText}>Labs & Experimental Learning (ISELF VizLab)</div>
                </div>
                <div className={styles.keyRow}>
                    <GiArchiveResearch style={{color: 'red'}}></GiArchiveResearch>
                    <div className={styles.keyText}>Read Search & Discuss (Exploratory assignment: literature review + oral presentaion + report)</div>
                </div>
                <div className={styles.keyRow}>
                    <HiUserGroup style={{color: 'black' }}></HiUserGroup>
                    <div className={styles.keyText}>Group-based Semester Long Industry-Directed Projects</div>
                </div>
                <div className={styles.keyRow}>
                    <BsTriangleFill style={{color: 'green'}}></BsTriangleFill>
                    <div className={styles.keyText}>Research Activities</div>
                </div>            
                <div className={styles.keyRow}>
                    <GiCube style={{color: 'gray', }}></GiCube>
                    <div className={styles.keyText}>Professional Working Experience</div>
                </div>

                {/* **************TESTING AREA********* */}
                {/* <div className={styles.keyRow}>
                    <Type type={types}/>
                </div> */}

                {/* <div>
                    <Course
                      courseName={'SE 460'}
                      temp_trait={<RiComputerFill style={{color: 'orange'}}/>}
                    />
                </div> */}
                {/* <Extracurricular
                    ecName={'Hackathons'}
                /> */}

                <Courses 
                
                />

                <Course 
                    courseName={'Test'}
                    types={<Types/>}
                />

                <Types/>

                {/* **************TESTING AREA********* */}

 
                
            </div>
            
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
