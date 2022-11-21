import { createContext, useContext, useState } from "react";

const Context = createContext();

export function CoreSkillsProvider({ children }) {
  const [coreSkills, setCoreSkills] = useState("");

  return (
    <Context.Provider value={[coreSkills, setCoreSkills]}>
      {children}
    </Context.Provider>
  );
}

export function useCoreSkillsContext() {
  return useContext(Context);
}
