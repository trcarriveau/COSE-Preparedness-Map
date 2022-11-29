import { createContext, useContext, useState } from "react";

const Context = createContext();

export function MapDataProvider({ children }) {
  const [mapData, setMapData] = useState("");
  return (
    <Context.Provider value={[mapData, setMapData]}>
      {children}
    </Context.Provider>
  );
}

export function useMapDataContext() {
  return useContext(Context);
}
