//remove this import   dummy data used to simplify testing during contstuction
import map from "../Components/test_objects/map_data.json";

import { createContext, useContext, useState } from "react";

const Context = createContext();

export function MapDataProvider({ children }) {
  const [mapData, setMapData] = useState(null);
  //TODO reimplement this import once testing is complete
  //const [mapData, setMapData] = useState("");
  return (
    <Context.Provider value={[mapData, setMapData]}>
      {children}
    </Context.Provider>
  );
}

export function useMapDataContext() {
  return useContext(Context);
}
