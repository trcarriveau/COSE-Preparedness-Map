//Component responsible for iterating through a list of course components
//and displaying them in a column

import Course from "./Course";
import Types from "./Types";

const Courses = ({ courses }) => {
  return (
    // <div className={styles.semester}>
    <>
      {courses.map((course) => (
        <>
          <Course courseName={course.item_name} types={<Types />} />
        </>
      ))}
    </>
  );
};

export default Courses;
