import React from "react";
import Paper from "@mui/material/Paper";

import CircleIcon from "@mui/icons-material/Circle";
import ComputerIcon from "@mui/icons-material/Computer";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import PeopleIcon from "@mui/icons-material/People";
import ViewInArIcon from "@mui/icons-material/ViewInAr";

import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

//icons (from react-icons)
import { RiComputerFill } from "react-icons/ri";
import { GiArchiveResearch } from "react-icons/gi";
import { GrGroup } from "react-icons/gr";
import { BsTriangleFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { GiCube } from "react-icons/gi";

import { shadows } from "@mui/system";

const icons = {
  CircleIcon,
  ComputerIcon,
};

const Icon = (icon_name, icon_color) => {
  //   console.log("In Icons.js  icon_name is: ", icon_name);
  //   console.log("In Icons.js  icon_color is: ", icon_color);
  //   console.log(
  //     "In Icons.js  icon_name matches CircleIcon: ",
  //     icon_name.icon_name == "CircleIcon"
  //   );
  //   console.log(
  //     "In Icons.js  icon_name matches CircleIcon: ",
  //     icon_name == "CircleIcon"
  //   );
  //   console.log(
  //     "In Icons.js  icon_color matches red: ",
  //     icon_color.icon_color == "red",
  //     icon_color == "red"
  //   );

  // switch (icon_name.icon_name) {
  //   case "CircleIcon":
  //     //return <CircleIcon style={{ color: icon_color }} />;
  //     return <CircleIcon style={{ color: "red" }} />;
  //   case "ComputerIcon":
  //     return <ComputerIcon style={{ color: "orange" }} />;
  //   case "Read":
  //     return <AutoStoriesIcon style={{ color: "red" }} />;
  //   case "Triangle":
  //     return <ChangeHistoryIcon style={{ color: "lgreen" }} />;
  //   case "People":
  //     return <PeopleIcon style={{ color: "yellow" }} />;
  //   case "Cube":
  //     return <ViewInArIcon style={{ color: "grey" }} />;
  //   default:
  //     return "This is default";
  // }

  switch (icon_name.icon_name) {
    case "CircleIcon":
      //return <CircleIcon style={{ color: icon_color }} />;
      return <CircleIcon sx={{ boxShadow: 10 }} style={{ color: "red" }} />;
    case "ComputerIcon":
      return <RiComputerFill style={{ color: "orange" }} />;
    case "Read":
      return <GiArchiveResearch style={{ color: "red" }}></GiArchiveResearch>;
    case "Triangle":
      return <BsTriangleFill style={{ color: "lawngreen" }}></BsTriangleFill>;
    case "People":
      return <HiUserGroup style={{ color: "black" }}></HiUserGroup>;
    case "Cube":
      return <GiCube style={{ color: "gray" }}></GiCube>;
    default:
      return <QuestionMarkIcon />;
  }
};

export default Icon;

//Old Icon Style
{
  /* 

<RiComputerFill style={{color: 'gray'}}/>
<GiArchiveResearch style={{color: 'red'}}></GiArchiveResearch>
<HiUserGroup style={{color: 'black' }}></HiUserGroup>
<BsTriangleFill style={{color: 'green'}}></BsTriangleFill>
<GiCube style={{color: 'gray', }}></GiCube> 

*/
}
