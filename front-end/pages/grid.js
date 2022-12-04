import styles from "../styles/Map.module.css";

import Grid from "@mui/material/Grid"; // Grid version 1
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Tooltip from "@mui/material/Tooltip";

import { useState } from "react";

import Colors from "../Components/Colors";
import CoreSkills from "../Components/CoreSkills";
import Seasons from "../Components/Seasons";
import Seasons2 from "../Components/grid_components/Seasons2";
import Seasons3 from "../Components/grid_components/Seasons3";
import SemestersRow from "../Components/SemestersRow";
import TypesKey from "../components/TypesKey";
import Icon from "../Components/Icon";

//test imports
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Years from "../Components/Years";
import Years2 from "../Components/grid_components/Years2";
import CircleIcon from "@mui/icons-material/Circle";
import { shadows } from "@mui/system";

import { useYearsSemestersContext } from "../contexts/years_semesters";
import { useCoreSkillsContext } from "../contexts/skills";
import { useMapDataContext } from "../contexts/mapdata";

import { Container } from "@mui/system";
import GridContainer from "../Components/GridContainer";

const grid = () => {
  const [years_semesters, setYears_Semesters] = useYearsSemestersContext();
  const [coreSkills, setCoreSkills] = useCoreSkillsContext();
  const [mapData, setMapData] = useMapDataContext();

  const [isLoading, setIsLoading] = useState(false);

  if (!mapData) return <p> No Map </p>;

  return (
    <Box style={{ backgroundColor: Colors.background, padding: "50px" }}>
      <Years2 />
      <Seasons3 />
      <div
        className={styles.middle}
        style={{ backgroundColor: Colors.background }}
      >
        <CoreSkills />
        <GridContainer
          columns={mapData.total_semesters}
          rows={coreSkills.length}
        />
      </div>

      <Box className={styles.key}>
        <TypesKey />
        <Paper className={styles.typeKey} elevation={10}>
          <Tooltip title="A course in the declared program">
            <Box className={styles.keyRow}>
              <div
                className={styles.box}
                style={{ backgroundColor: Colors.course }}
              ></div>

              <Box className={styles.keyText}>Course</Box>
            </Box>
          </Tooltip>
          <Tooltip title="An optional activity">
            <Box className={styles.keyRow}>
              <div
                className={styles.box}
                style={{ backgroundColor: Colors.ec }}
              ></div>
              <div className={styles.keyText}>Extracurricular</div>
            </Box>
          </Tooltip>
        </Paper>
      </Box>
    </Box>
  );
};

export default grid;
