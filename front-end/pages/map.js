import styles from "../styles/Map.module.css"
import Year from "../components/Year";
import CoreSkill from "../components/CoreSkill";
import Colors from "../components/Colors";
import Course from "../components/Course";

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
        <div className={styles.key}>
            <div>
                Traits Key
            </div>
            <div style={{display: 'flex', flexDirection: 'column', }}>             
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
