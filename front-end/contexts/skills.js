import { createContext, useContext, useState } from "react";

//TODO  Remove after testing
import skill_data from "../Components/test_objects/cose-skills.json";

const Context = createContext();

export function CoreSkillsProvider({ children }) {
  //const [coreSkills, setCoreSkills] = useState("");
  const [coreSkills, setCoreSkills] = useState(skill_data);

  return (
    <Context.Provider value={[coreSkills, setCoreSkills]}>
      {children}
    </Context.Provider>
  );
}

export function useCoreSkillsContext() {
  return useContext(Context);
}
