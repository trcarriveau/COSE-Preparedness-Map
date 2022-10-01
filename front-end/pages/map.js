import styles from "../styles/Map.module.css"
import Year from "../components/Year";
import CoreSkill from "../components/CoreSkill";
import Colors from "../components/Colors";
import Course from "../components/Course";

//icons (from react-icons)
import {RiComputerFill} from 'react-icons/ri'
import {GrGroup} from 'react-icons/gr'
import {GiArchiveResearch} from 'react-icons/gi' 
import {GiCube} from 'react-icons/gi'
import {BsTriangleFill} from 'react-icons/bs'

function Map() {
  return (
    <div>
        <div className={styles.years}>
           <Year
            color= {Colors.gray1}
            yearNumber='1' 
            studentClass='Freshman'
            />
            <Year
            color= {Colors.gray2}
            yearNumber='2' 
            studentClass='Sophomore'
            />
            <Year
            color= {Colors.gray3}
            yearNumber='3' 
            studentClass='Junior'
            />
            <Year
            color= {Colors.gray4}
            yearNumber='4' 
            studentClass='Senior'
            />
        </div>

        {/* //TODO: make styles.seasons div into a component */}
        <div className={styles.seasonsContainer}> 
            <div className={styles.seasons}>
                <div className={styles.season}>
                    Fall
                </div>
                <div className={styles.season}>
                    Spring
                </div> 
            </div>
            <div className={styles.seasons}>
                <div className={styles.season}>
                    Fall
                </div>
                <div className={styles.season}>
                    Spring
                </div> 
            </div>
            <div className={styles.seasons}>
                <div className={styles.season}>
                    Fall
                </div>
                <div className={styles.season}>
                    Spring
                </div>
            </div>
            <div className={styles.seasons}>
                <div className={styles.season}>
                    Fall
                </div>
                <div className={styles.season}>
                    Spring
                </div>
            </div>
        </div>

        <div className={styles.middle}>
            <div className={styles.skills}>
                <CoreSkill className={styles.skill}
                    title="Soft Skill"
                    color={Colors.green5}
                />
                <CoreSkill
                    title="Life Long Learning"
                    color={Colors.green4}
                />    
                <CoreSkill
                    title="Special Technical Skills, Techniques, and Tools"
                    color={Colors.green3}
                />
                <CoreSkill
                    title="Fundamental Knowledge & Concepts"
                    color={Colors.green2}
                />    
                <CoreSkill
                    title="Citizenship"
                    color={Colors.green1}
                />
            </div>
            <div className={styles.testBox}>
                Test 
            </div>
            <div>
                Test 
            </div>
            <div>
                Test 
            </div>
        </div>
        {/*TODO styles.key area needs to be converted to component to iterate through traits */}
        <div className={styles.key}>
            <div style={{display: 'flex', flexDirection: 'column', margin: '10px'}}>
                <div className={styles.keyRow}>
                    <RiComputerFill style={{color: 'orange'}}></RiComputerFill>
                    <div className={styles.keyText}>Labs & Experimental Learning (ISELF VizLab)</div>
                </div>
                <div className={styles.keyRow}>
                    <GiArchiveResearch style={{color: 'red'}}></GiArchiveResearch>
                    <div className={styles.keyText}>Read Search & Discuss (Exploratory assignment: literature review + oral presentaion + report)</div>
                </div>
                <div className={styles.keyRow}>
                    <GrGroup style={{color: 'yellow'}}></GrGroup>
                    <div className={styles.keyText}>Group-based Semester Long Industry-Directed Projects</div>
                </div>
                <div className={styles.keyRow}>
                    <BsTriangleFill style={{color: 'green'}}></BsTriangleFill>
                    <div className={styles.keyText}>Research Activities</div>
                </div>            
                <div className={styles.keyRow}>
                    <GiCube style={{color: 'gray'}}></GiCube>
                    <div className={styles.keyText}>Professional Working Experience</div>
                </div>
            </div>
            
            <div style={{display: 'flex', flexDirection: 'column', margin: '10px'}}>             
                <div className={styles.keyRow}>
                    <div className={styles.box} style={{backgroundColor: Colors.courseBlue}}>     
                    </div>
                    <div className={styles.keyText}>Course</div>
                </div>
                <div className={styles.keyRow}>
                    <div className={styles.box} style={{backgroundColor: Colors.ecYellow}} >
                    </div>
                    <div className={styles.keyText}>Extracurricular</div>
                </div>
            </div>
        </div>
    </div>


  );
}

export default Map;