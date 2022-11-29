//This is a component to hold the contents of a single courses and ecs component
//It will display their output on a particular fall/spring rectangle on the career-map

import React from "react";
import Courses from "../Courses";
import Extracurriculars from "../Extracurriculars";

//TODO receive prop data for a semester

const Semester = ({ color }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "50%",
        backgroundColor: color,
        marginLeft: "2px",
        marginRight: "2px",
      }}
    >
      <div style={styles.coursesContainer}>
        <Courses courses={courses} />
      </div>
      <div style={styles.ecContainer}>
        <Extracurriculars />
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
