import React from "react";
import Year from "../Year";
import Colors from "../Colors";
import styles from "../../styles/Map.module.css";

import Grid from "@mui/material/Grid"; // Grid version 1
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Paper from "@mui/material/Paper";
import { useYearsSemestersContext } from "../../contexts/years_semesters";

//TODO: update years to have a years object parameter that replaces the array with values from DB
// const years = [
//   {
//     color: Colors.primaryLightest,
//     yearNumber: "1",
//     studentClass: "Freshman",
//     has_summer: false,
//   },

//   {
//     color: Colors.primaryLight,
//     yearNumber: "2",
//     studentClass: "Sophomore",
//     has_summer: false,
//   },
//   {
//     color: Colors.primaryMain,
//     yearNumber: "3",
//     studentClass: "Junior",
//     has_summer: true,
//   },
//   {
//     color: Colors.primaryDark,
//     yearNumber: "4",
//     studentClass: "Senior",
//     has_summer: false,
//   },
// ];

const season_colors = [
  Colors.primaryLightest,
  Colors.primaryLight,
  Colors.primaryMain,
  Colors.primaryDark,
];

const studentClass = ["Freshman", "Sophomore", "Junior", "Senior"];

const Years = () => {
  const [years_semesters, setYears_Semesters] = useYearsSemestersContext();
  return (
    <Grid
      container
      className={styles.years}
      style={{ backgroundColor: Colors.background }}
    >
      {years_semesters.years.map((year, index) => (
        <Grid item xs="auto" style={{ flex: year.has_summer ? 1.5 : 1 }}>
          <Paper>
            <Year
              color={season_colors[index % season_colors.length]}
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
