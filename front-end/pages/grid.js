import styles from "../styles/Map.module.css";

import Grid from "@mui/material/Grid"; // Grid version 1
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2

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

import { green } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import CircleIcon from "@mui/icons-material/Circle";
import ComputerIcon from "@mui/icons-material/Computer";
import { MdCircle } from "react-icons/md";

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
  const icon_testing = ["CircleIcon", "ComputerIcon"];
  return (
    <Box style={{ backgroundColor: Colors.background, padding: "50px" }}>
      {/* <Years /> */}
      <Years2 />
      {/* <Seasons total_years={years_semesters.total_years} />
      <Seasons2 /> */}
      <Seasons3 />
      <div
        className={styles.middle}
        style={{ backgroundColor: Colors.background }}
      >
        <CoreSkills />
        {/* This should be pulled into a component   need to learn to iterate the lower divs in a mapping function to add semester data */}

        <GridContainer
          columns={years_semesters.semesters}
          rows={coreSkills.length}
        />
      </div>

      <div>
        {/* <MdCircle />*/}
        {/* <CircleIcon style={{ color: "red" }} />
        <ComputerIcon /> */}
        {/* <Icon icon_name={icon_testing} icon_color={"red"} /> */}
        {/* <Icon icon_name={"ComputerIcon"} icon_color={"red"} /> */}

        <Icon icon_name={"CircleIcon"} />
        <Icon icon_name={"ComputerIcon"} icon_color={"red"} />
        <Icon icon_name={"People"} />
        <Icon icon_name={"Read"} />
        <Icon icon_name={"Triangle"} />
        <Icon icon_name={"Cube"} />

        {/* 
        <Icon color="primary">add_circle</Icon>
        <Icon sx={{ color: green[500] }}>add_circle</Icon>
        <Icon fontSize="small">add_circle</Icon>
        <Icon sx={{ fontSize: 30 }}>add_circle</Icon> */}
        {/* <Icon baseClassName="fas" className="fa-plus-circle" color="green" />
        <DeleteIcon /> */}
      </div>

      <Box className={styles.key}>
        <TypesKey />
        <div className={styles.typeKey}>
          <div className={styles.keyRow}>
            <div
              className={styles.box}
              style={{ backgroundColor: Colors.course }}
            ></div>
            <div className={styles.keyText}>Course</div>
          </div>
          <div className={styles.keyRow}>
            <div
              className={styles.box}
              style={{ backgroundColor: Colors.ec }}
            ></div>
            <div className={styles.keyText}>Extracurricular</div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default grid;
