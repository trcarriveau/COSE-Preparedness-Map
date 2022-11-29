//component responsible for display of a single course on on the map

import Colors from "../Colors";
import Types from "./Types2";
import Paper from "@mui/material/Paper";
import CircleIcon from "@mui/icons-material/Circle";
import Type from "../Type";
import Box from "@mui/material/Box";

import Icon from "@mui/material/Icon";

//temp trait is a stand in until we have functional type icons and labels using types component
const Course = ({ courseName, temp_trait, types }) => {
  return (
    // <div style={styles.courseContainer}>

    <Paper
      elevation={8}
      style={{
        display: "flex",
        backgroundColor: Colors.course,
        color: "white",
        justifyContent: "space-between",
        borderRadius: "10px",
        alignItems: "center",
        width: "90%",
        margin: "2px",
      }}
    >
      <div
        style={{
          display: "flex",
          marginLeft: "10px",
          flexDirection: "row",
          gap: "5px",
        }}
      >
        {/* {temp_trait}
        {types ? `<${types.TypeIcon} />` : null}
        <CircleIcon />
        <Icon>star</Icon>;<Types /> */}
        {/* <Type type_icon={types.TypeIcon} /> */}
      </div>
      <div>{courseName}</div>
      {/* Nothing to display below  Just used for justify-content space-between  */}
      <div
        style={{
          display: "flex",
          marginRight: "10px",
        }}
      >
        <></>
      </div>
    </Paper>
  );
};

let styles = {
  courseContainer: {
    display: "flex",
    backgroundColor: Colors.course,
    color: "white",
    justifyContent: "center",
    borderRadius: "10px",
    // width: '100px',
    // height: '25px',
  },
};

export default Course;
