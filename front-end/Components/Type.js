//Component for displaying an icon associated with a class type

import React from "react";
import Icon from "./Icon";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Colors from "./Colors";

// import CircleIcon from "@mui/icons-material/Circle";
// import styled from "@emotion/styled";

//icons (from react-icons)
// import { RiComputerFill } from "react-icons/ri";
// import { GrGroup } from "react-icons/gr";
// import { GiArchiveResearch } from "react-icons/gi";
// import { GiCube } from "react-icons/gi";
// import { BsTriangleFill } from "react-icons/bs";
// import TypesKey from "./TypesKey";

const Type = ({ type_name, type_icon, color }) => {
  return (
    <Box
      style={{
        paddingLeft: "1px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {type_icon ? <Icon icon_name={type_icon} /> : null} {/* </Paper>{" "} */}
      &nbsp; {type_name}
    </Box>
  );
};

export default Type;
