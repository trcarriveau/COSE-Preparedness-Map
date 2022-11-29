//Displays a single extracurricular activity

import React from "react";
import Colors from "./Colors";
import Paper from "@mui/material/Paper";

const Extracurricular = ({
  ecName,
  description,
  skills,
  types,
  year_semester,
  is_ec,
  temp_trait,
}) => {
  return (
    <Paper
      elevation={8}
      style={{
        display: "flex",
        backgroundColor: Colors.ec,
        color: "black",
        justifyContent: "center",
        borderRadius: "10px",
        alignItems: "center",
        width: "90%",
        margin: "2px",
      }}
    >
      {ecName}
    </Paper>
  );
};

export default Extracurricular;
