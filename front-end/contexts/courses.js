import { createContext, useContext, useState } from "react";

const Context = createContext();

export function CoursesProvider({ children }) {
  const [courses, setCourses] = useState();

  return (
    <Context.Provider value={[courses, setCourses]}>
      {children}
    </Context.Provider>
  );
}

export function useCoursesContext() {
  return useContext(Context);
}
