import React from "react";

import CircleIcon from "@mui/icons-material/Circle";
import ComputerIcon from "@mui/icons-material/Computer";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import PeopleIcon from "@mui/icons-material/People";
import ViewInArIcon from "@mui/icons-material/ViewInAr";

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

  switch (icon_name.icon_name) {
    case "CircleIcon":
      //return <CircleIcon style={{ color: icon_color }} />;
      return <CircleIcon style={{ color: "red" }} />;
    case "ComputerIcon":
      return <ComputerIcon style={{ color: "orange" }} />;
    case "Read":
      return <AutoStoriesIcon style={{ color: "red" }} />;
    case "Triangle":
      return <ChangeHistoryIcon style={{ color: "lawngreen" }} />;
    case "People":
      return <PeopleIcon style={{ color: "yellow" }} />;
    case "Cube":
      return <ViewInArIcon style={{ color: "grey" }} />;
    default:
      return "This is default";
  }
};

export default Icon;
