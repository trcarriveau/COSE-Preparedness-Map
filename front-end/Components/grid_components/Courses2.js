//Component responsible for iterating through a list of course components
//and displaying them in a column

import { formControlUnstyledClasses } from "@mui/base";
import Course from "./Course2";
import Extracurricular from "../Extracurricular";
import Types from "./Types2";
import Type from "../Type";

const Courses = ({ courses }) => {
  return (
    // <div className={styles.semester}>
    <>
      {courses.map((course) => (
        <>
          <Course courseName={course.CourseName} types={<Types />} />
        </>
      ))}
    </>
  );
};

export default Courses;
