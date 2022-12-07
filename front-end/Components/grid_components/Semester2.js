//This is a component to hold the contents of a single courses and ecs component
//It will display their output on a particular fall/spring rectangle on the career-map

import { getStepConnectorUtilityClass } from "@mui/material";
import React from "react";
import Courses from "./Courses2";
import Extracurriculars from "../Extracurriculars";

//TODO receive prop data for a semester

const Semester = ({ courses }) => {
  let classes = [];
  let ecs = [];

  courses.forEach((course, index) => {
    if (course.is_extra_curricular == false) {
      classes.push(course);
    } else if (course.is_extra_curricular) {
      ecs.push(course);
    }
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginLeft: "2px",
        marginRight: "2px",
        flexGrow: 1,
        paddingTop: "5px",
        paddingBottom: "5px",
      }}
    >
      <div style={styles.coursesContainer}>
        <Courses courses={classes} />
      </div>
      <div style={styles.ecContainer}>
        <Extracurriculars extracurriculars={ecs} />
      </div>
    </div>
  );
};

let styles = {
  coursesContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  ecContainer: {
    display: "flex",
    flexDirection: "column-reverse",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  semester: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // backgroundColor: {color},
    width: "50%",
  },
};

export default Semester;
