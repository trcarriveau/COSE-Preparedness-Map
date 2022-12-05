import React from "react";
import Year from "../Year";
import Colors from "../Colors";
import styles from "../../styles/Map.module.css";

import Grid from "@mui/material/Grid"; // Grid version 1
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Paper from "@mui/material/Paper";
import { useYearsSemestersContext } from "../../contexts/years_semesters";
import { useMapDataContext } from "../../contexts/mapdata";

const studentClass = ["Freshman", "Sophomore", "Junior", "Senior"];

const Years = () => {
  const [mapData, setMapData] = useMapDataContext();
  return (
    <Grid
      container
      className={styles.years}
      style={{ backgroundColor: Colors.background }}
    >
      {mapData.year_information.map((year, index) => (
        <Grid item xs="auto" style={{ flex: year.has_summer ? 1.5 : 1 }}>
          <Paper>
            <Year
              color={Colors.PrimaryArr[index % Colors.PrimaryArr.length]}
              yearNumber={year.year}
              studentClass={
                index < studentClass.length
                  ? studentClass[index]
                  : studentClass[studentClass.length - 1]
              }
              has_summer={year.has_summer}
            />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Years;
