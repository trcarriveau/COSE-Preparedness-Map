//This component receives an array of Type components and iterates through them
//Should be able to display the icons for the array of $oids sent to it from a course
import React from "react";

import Type from "../Type";
//icons (from react-icons)
// import styled from "@emotion/styled";
// import CircleIcon from "@mui/icons-material/Circle";

import { RiComputerFill } from "react-icons/ri";

import {
  GiArchiveResearch,
  GiConsoleController,
  GiFlexibleLamp,
} from "react-icons/gi";

const types2 = [
  {
    type_map: "Software Engineering",
    type_name: "Professional Working Experience",
    type_information: "",
    type_icon: <RiComputerFill style={{ color: "gray" }} />,
    type_color: "orange",
  },
  {
    type_map: "Software Engineering",
    type_name:
      "Read Search & Discuss (Exploratory assignment: literature review + oral presentaion + report)",
    type_information: "",
    type_icon: <GiArchiveResearch />,
    type_color: "red",
  },
];

//TODO: Learn to pass color component and update icon coloring
//TODO: Check on centering of text in course component when there are multiple types
const Types = ({ types, type_icon2 }) => {
  return (
    <>
      {types2.map((type) => (
        <div>
          <Type
            // type_icon={type.TypeIcon}
            type_icon2={type.type_icon}
            type_color={type.type_color}
            type_name={type.typeName}
          />
        </div>
      ))}
      {/* <CircleIcon /> */}
    </>
  );
};

export default Types;
