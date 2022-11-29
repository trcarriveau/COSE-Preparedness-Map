//Component responsible for iterating through a list of course components
//and displaying them in a column

import { formControlUnstyledClasses } from "@mui/base";
import Course from "../Course";
import Extracurricular from "../Extracurricular";
import Types from "./Types2";

const Courses = ({ courses }) => {
  return (
    // <div className={styles.semester}>
    <>
      {courses.map((course) => (
        <>
          {course.is_extra_curricular ? (
            <Extracurricular ecName={course.CourseName} />
          ) : (
            <Course
              courseName={course.CourseName}
              types={<Types types2={courses.type} />}
            />
          )}
        </>
      ))}
    </>
  );
};

export default Courses;
