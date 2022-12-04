//This file creates the Semester Labels below the Years and above the map output

import styles from "../../styles/Map.module.css";
import Season from "../Season";
import Colors from "../Colors";
import Paper from "@mui/material/Paper";

import { useMapDataContext } from "../../contexts/mapdata";

const Seasons = () => {
  const [mapData, setMapData] = useMapDataContext();

  return (
    <div
      className={styles.seasonsContainer}
      style={{ backgroundColor: Colors.background }}
    >
      <Paper
        className={styles.seasons}
        style={{ backgroundColor: Colors.background }}
      >
        {mapData.years.map((year, index) => (
          <>
            {year.semesters.map((semester, index) => (
              <>
                <Season
                  key={index}
                  label={semester.SemesterName}
                  color={Colors.PrimaryArr[year.year - 1]}
                />
              </>
            ))}
          </>
        ))}
      </Paper>
    </div>
  );
};

export default Seasons;
