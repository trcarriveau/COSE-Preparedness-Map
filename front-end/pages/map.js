import styles from "../styles/Map.module.css"
import Year from "../components/Year";
import CoreSkill from "../components/CoreSkill";
import Colors from "../components/Colors";


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
    </div>
  );
}

export default Map;
