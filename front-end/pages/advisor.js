import CourseList from '../components/CourseList';
import Skills from '../components/Skills';
import styles from "../styles/advisor.module.css";

function advisor() {
  return (
    <div className={styles.container}>
      <div className={styles.courseApp}>
        <CourseList />
      </div>
      <div className={styles.courseApp1}>
          <Skills />
        </div>
    </div>
  );
}

export default advisor;