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
  console.log("Y3, in Semesters2 mapData is", mapData);
  return (
    <>
      {mapData.years.map((year, index) => (
        <>
          {year.semesters.map((semester, index) => (
            <Paper
              elevation={2}
              style={{
                backgroundColor: `${Colors.PrimaryArr[year.year - 1]}`,
                display: "flex",
              }}
            >
              {semester.Skills.filter(
                (skill) => skill.SkillName == skill_name
              ).map((filteredSkill) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    marginLeft: "2px",
                    marginRight: "2px",
                    flexGrow: 1,
                  }}
                >
                  <Semester courses={filteredSkill.Courses} />
                </div>
              ))}
            </Paper>
          ))}
        </>
      ))}
    </>
  );
};

export default Semesters;
