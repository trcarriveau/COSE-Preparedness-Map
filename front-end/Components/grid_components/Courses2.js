//Component responsible for iterating through a list of course components
//and displaying them in a column

import { formControlUnstyledClasses } from "@mui/base";
import Course from "./Course2";
import Extracurricular from "../Extracurricular";
import Types from "./Types2";
import Type from "../Type";

import CircleIcon from "@mui/icons-material/Circle";

const Courses = ({ courses }) => {
  return (
    // <div className={styles.semester}>
    <>
      {courses.map((course) => (
        <>
          {/* <Course courseName={course.CourseName} types={<Types />} /> */}
          <Course
            courseName={course.CourseName}
            // temp_trait={<CircleIcon style={{ color: "red" }} />}
            types={course.Type}
            // temp_trait={}
          />
        </>
      ))}
    </>
  );
};

export default Courses;
