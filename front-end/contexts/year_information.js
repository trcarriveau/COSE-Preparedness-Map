import { createContext, useContext, useState } from "react";

const Context = createContext();

export function YearsInformationProvider({ children }) {
  const [yearInformation, setYearInformation] = useState(semesters_data);

  return (
    <Context.Provider value={[semesters, setSemesters]}>
      {children}
    </Context.Provider>
  );
}

export function useYearInformationContext() {
  return useContext(Context);
}
