import Grid from "@mui/material/Grid"; // Grid version 1
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import { useState } from "react";

import Colors from "../Components/Colors";
import CoreSkills from "../Components/CoreSkills";
import Seasons from "../Components/Seasons";
import Seasons2 from "../Components/grid_components/Seasons2";

//test imports
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Years from "../Components/Years";
import Years2 from "../Components/grid_components/Years2";

const grid = () => {
  //used by Seasons component this value should be set/controlled by back end
  const [totalYears, setTotalYears] = useState(4);

  return (
    <div style={{ backgroundColor: Colors.background }}>
      <Years />
      <Years2 />
      <Seasons total_years={totalYears} />
      <Seasons2 total_years={totalYears} />
      <CoreSkills />
    </div>
  );
};

export default grid;
