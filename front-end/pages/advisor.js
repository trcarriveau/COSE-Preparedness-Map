import CourseList from '../components/CourseList';
import styles from "../styles/advisor.module.css";

function advisor() {
  return (
    <div className={styles.courseApp}>
      <CourseList />
    </div>
  );
}

export default advisor;