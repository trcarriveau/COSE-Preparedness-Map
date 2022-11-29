import { Container, Paper } from "@mui/material";
import Colors from "../Colors";
import { useMapDataContext } from "../../contexts/mapdata";
import { useState } from "react";

import Season from "../Season";
import Semester from "./Semester2";
import Course from "../Course";
import Extracurriculars from "../Extracurriculars";
import Extracurricular from "../Extracurricular";
import Courses from "./Courses2";

const Semesters = ({ columns, skill_name }) => {
  const [mapData, setMapData] = useMapDataContext();
  return (
    <>
      {mapData.years.map((year, index) => (
        <>
          {year.semesters.map((semester, index) => (
            <Paper
              elevation={2}
              style={{ backgroundColor: `${Colors.PrimaryArr[year.year - 1]}` }}
            >
              {semester.Skills.filter(
                (skill) => skill.SkillName == skill_name
              ).map((filteredSkill) => (
                //TODO Course and EC component calls should be changed to Courses/ECs in case of multiples
                <>
                  <Courses courses={filteredSkill.Courses} />
                  {/* {filteredSkill.Courses.map((course) => (
                    <>
                      {course.is_extra_curricular ? (
                        <Extracurricular ecName={course.CourseName} />
                      ) : (
                        <Course courseName={course.CourseName} />
                      )}
                    </>
                  ))} */}
                </>
              ))}
            </Paper>
          ))}
        </>
      ))}
    </>
  );
};

export default Semesters;

{
  /* <Season
style={{
    gridColumn: `${index + (1 % columns)} / ${
        index + (2 % columns)
    }`,
    gridRow: "auto",
}}
key={index}
label={semester.YearName}
color={Colors.PrimaryArr[year.year - 1]}
/> */
}
{
  /* {semester.skills
  .filter((skill) => {
    return skill.SkillName === "Soft Skills";
  })
  .map((skill) => {
      return <div>Nested Looop: {skill.SkillName}</div>;
  })} */
}
