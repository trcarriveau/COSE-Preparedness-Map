//Component for displaying an icon associated with a class type

import React from "react";
import Icon from "./Icon";

// import CircleIcon from "@mui/icons-material/Circle";
// import styled from "@emotion/styled";

//icons (from react-icons)
// import { RiComputerFill } from "react-icons/ri";
// import { GrGroup } from "react-icons/gr";
// import { GiArchiveResearch } from "react-icons/gi";
// import { GiCube } from "react-icons/gi";
// import { BsTriangleFill } from "react-icons/bs";
// import TypesKey from "./TypesKey";

const Type = ({
  type_map,
  type_name,
  type_information,
  type_icon,
  type_icon2,
  type_color,
}) => {
  return (
    <div style={{ paddingLeft: "1px" }}>
      {type_icon2 ? <Icon icon_name={type_icon2} /> : null}
      {type_icon} &nbsp; {type_name}
    </div>
  );
};

export default Type;
