//Component responsible for iterating through a list of course components
//and displaying them in a column

import { formControlUnstyledClasses } from "@mui/base";
import Course from "./Course2";
import Extracurricular from "../Extracurricular";
import Types from "./Types2";
import Type from "../Type";

import CircleIcon from "@mui/icons-material/Circle";

const Courses = ({ courses }) => {
  console.log("Y6  in Courses, courses is", courses);

  return (
    <>
      {courses.map((course) => (
        <>
          <Course
            courseName={course.CourseName}
            types={course.Type}
            courseDescription="Course Description: This feature coming soon"
          />
        </>
      ))}
    </>
  );
};

export default Courses;
