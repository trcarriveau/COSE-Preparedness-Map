//This component is responsible for a single horizontal row on the career map 

import styles from '../styles/Map.module.css'
import Semester from './Semester';
import Colors from './Colors';

//TODO: Add a parameter to receive data props for the semesters associated with a particular skill

const SemestersRow = ( {total_years}) => {

    let fall = '';
    let spring = '';
    let semesters= [];
    let i = 1;
    while (i <= total_years) {
    if (i%4 == 1) {
        fall = {id: i, label: 'Fall  ', color: Colors.primaryLightest}
        spring = {id: i*10, label: 'Spring', color: Colors.primaryLightest}
    } else if (i%4 == 2) {
        fall = {id: i, label: 'Fall  ', color: Colors.primaryLight}
        spring = {id: i*10, label: 'Spring', color: Colors.primaryLight}
    } else if (i%4 == 3) {
        fall = {id: i, label: 'Fall  ', color: Colors.primaryMain}
        spring = {id: i*10, label: 'Spring', color: Colors.primaryMain}
    } else if (i%4 == 0) {
        fall = {id: i, label: 'Fall  ', color: Colors.primaryDark}
        spring = {id: i*10, label: 'Spring', color: Colors.primaryDark}
    } else {
        console.log("not sure how you got here....")
    }
    semesters.push(fall)
    semesters.push(spring)
        i++;
    }  


    return (
        // // <div className={styles.semesters_by_skill}>
        //     {/* <div className={styles.semesters}> */}
        <div className={styles.semesters_by_skill}>
            <div className={styles.semesters}>
                {semesters.map((semester) =>
                (
                    <>
                        <Semester 
                           color={semester.color} 
                        />
                    </>
                ))}
            </div>
        </div>
    )
}

export default SemestersRow