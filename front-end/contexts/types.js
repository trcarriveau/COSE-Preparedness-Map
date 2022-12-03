import { createContext, useContext, useState } from "react";

//TODO  Remove after testing
const coded_types = [
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
    type_icon: <GiArchiveResearch style={{ color: "red" }}></GiArchiveResearch>,
    type_color: "red",
  },
  {
    type_map: "Software Engineering",
    type_name: "Group-based Semester Long Industry-Directed Projects",
    type_information: "",
    type_icon: <HiUserGroup style={{ color: "black" }}></HiUserGroup>,
    type_color: "orange",
  },
  {
    type_map: "Software Engineering",
    type_name: "Research Activities",
    type_information: "",
    type_icon: <BsTriangleFill style={{ color: "green" }}></BsTriangleFill>,
    type_color: "orange",
  },
  {
    type_map: "Software Engineering",
    type_name: "Professional Working Experience",
    type_information: "",
    type_icon: <GiCube style={{ color: "gray" }}></GiCube>,
    type_color: "orange",
  },
];

//icons (from react-icons)
import { RiComputerFill } from "react-icons/ri";
import { GiArchiveResearch } from "react-icons/gi";
import { GrGroup } from "react-icons/gr";
import { BsTriangleFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { GiCube } from "react-icons/gi";

const Context = createContext();

export function TypesProvider({ children }) {
  //const [types, setTypes] = useState("");
  //TODO  Remove this
  const [types, setTypes] = useState(coded_types);

  return (
    <Context.Provider value={[types, setTypes]}>{children}</Context.Provider>
  );
}

export function useTypesContext() {
  return useContext(Context);
}
