import { createContext, useContext, useState } from "react";

//icons (from react-icons)
import { RiComputerFill } from "react-icons/ri";
import { GiArchiveResearch } from "react-icons/gi";
import { GrGroup } from "react-icons/gr";
import { BsTriangleFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { GiCube } from "react-icons/gi";

const Context = createContext();

export function TypesProvider({ children }) {
  const [types, setTypes] = useState("");

  return (
    <Context.Provider value={[types, setTypes]}>{children}</Context.Provider>
  );
}

export function useTypesContext() {
  return useContext(Context);
}
