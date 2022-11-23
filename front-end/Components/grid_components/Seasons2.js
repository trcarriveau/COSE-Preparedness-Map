//Iterates through season components to make the line of column labels below total years
// and above each semester schedule

import styles from "../../styles/Map.module.css";
import Season from "../Season";
import Colors from "../Colors";
import Grid from "@mui/material/Grid"; // Grid version 1
import Paper from "@mui/material/Paper";

import { useYearsSemestersContext } from "../../contexts/years_semesters";

const Seasons = () => {
  //TODO: Apply colors and labels from position in array
  const season_colors = [
    Colors.primaryLightest,
    Colors.primaryLight,
    Colors.primaryMain,
    Colors.primaryDark,
  ];
  //   const season_labels = ["Fall", "Spring"];

  const [years_semesters, setYears_Semesters] = useYearsSemestersContext();

  //   const years_semesters2 = {
  //     total_years: 4,
  //     semesters: 9,
  //     years: [
  //       {
  //         year: 1,
  //         has_summer: false,
  //       },
  //       {
  //         year: 2,
  //         has_summer: true,
  //       },
  //       {
  //         year: 3,
  //         has_summer: true,
  //       },
  //       {
  //         year: 4,
  //         has_summer: false,
  //       },
  //     ],
  //   };

  let fall = "";
  let spring = "";
  let summer = "";
  let seasons = [];
  let i = 1;
  let has_summer = false;
  //TODO Adjust summer to be dynamic and available in any column
  while (i <= years_semesters.years.length) {
    if (i % 4 == 1) {
      fall = { id: i, label: "Fall  ", color: Colors.primaryLightest };
      spring = { id: i * 10, label: "Spring", color: Colors.primaryLightest };
      summer = { id: i * 100, label: "Summer", color: Colors.primaryLightest };
    } else if (i % 4 == 2) {
      fall = { id: i, label: "Fall  ", color: Colors.primaryLight };
      spring = { id: i * 10, label: "Spring", color: Colors.primaryLight };
      summer = { id: i * 100, label: "Summer", color: Colors.primaryLight };
    } else if (i % 4 == 3) {
      fall = { id: i, label: "Fall  ", color: Colors.primaryMain };
      spring = { id: i * 10, label: "Spring", color: Colors.primaryMain };
      summer = { id: i * 100, label: "Summer", color: Colors.primaryMain };
    } else if (i % 4 == 0) {
      fall = { id: i, label: "Fall  ", color: Colors.primaryDark };
      spring = { id: i * 10, label: "Spring", color: Colors.primaryDark };
      summer = { id: i * 100, label: "Summer", color: Colors.primaryDark };
    } else {
      console.log("not sure how you got here....");
    }

    seasons.push(fall);
    seasons.push(spring);
    if (years_semesters.years[i - 1].has_summer) {
      seasons.push(summer);
      has_summer = true;
    }
    seasons.push(has_summer);
    has_summer = false;
    i++;
  }

  return (
    // <div
    //   className={styles.seasonsContainer}
    //   style={{ backgroundColor: Colors.background }}
    // >
    // <Grid
    //   container
    //   spacing={1}
    //   className={styles.years}
    //   style={{ backgroundColor: Colors.background }}
    // >
    //   {seasons.map((season, index) => (
    //     <Grid
    //       item
    //       xs="auto"
    //       style={{ backgroundColor: "red", flex: season.has_summer ? 1.5 : 1 }}
    //     >
    //       <Paper>
    //         <Season
    //           key={season.id}
    //           label={season.label}
    //           color={
    //             season.color
    //             // index % 2
    //             //   ? season_colors[(index - 1) % season_colors.length]
    //             //   : season_colors[index % season_colors.length]
    //             //season_colors[Math.floor(index / 2) % season_colors.length]
    //           }
    //         />
    //       </Paper>
    //     </Grid>
    //   ))}
    // </Grid>
    // </div>
    <Grid
      container
      direction="row"
      style={{ paddingLeft: "20%", backgroundColor: "blue" }}
    >
      {years_semesters.years.map((year, index) => (
        <Grid
          item
          xs="auto"
          style={{ flexDirection: "row", flex: year.has_summer ? 1.5 : 1 }}
        >
          <Paper>
            <Season
              key={seasons[index].id}
              label={seasons[index].label}
              color={season_colors[index % season_colors.length]}
            />
          </Paper>
          <Season
            key={seasons[index + 1].id}
            label={seasons[index + 1].label}
            color={season_colors[index % season_colors.length]}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Seasons;
