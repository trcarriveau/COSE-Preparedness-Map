import { createContext, useContext, useState } from "react";

const Context = createContext();

const semesters_data = {
  total_years: 4,
  semesters: 9,
  years: [
    {
      year: 1,
      has_summer: false,
    },
    {
      year: 2,
      has_summer: false,
    },
    {
      year: 3,
      has_summer: true,
    },
    {
      year: 4,
      has_summer: false,
    },
  ],
};

export function YearsInformationProvider({ children }) {
  const [yearInformation, setYearInformation] = useState(semesters_data);

  return (
    <Context.Provider value={[yearInformation, setYearInformation]}>
      {children}
    </Context.Provider>
  );
}

export function useYearInformationContext() {
  return useContext(Context);
}