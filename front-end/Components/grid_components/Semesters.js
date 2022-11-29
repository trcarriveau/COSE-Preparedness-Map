import React from "react";
import { Container, Paper } from "@mui/material";
import Colors from "../Colors";
import { useYearsSemestersContext } from "../../contexts/years_semesters";
import { useState } from "react";
const Semesters = ({ columns, data }) => {
  const [semesters, setSemesters] = useYearsSemestersContext();
  const [summers, setSummers] = useState(0);
  return (
    <>
      {data.map((number, index) => (
        // console.log("semesters.js years_semesters is: ",years_semesters.years[index])
        <Paper
          elevation={2}
          style={{
            gridColumn: `${index + (1 % columns)} / ${index + (2 % columns)}`,
            gridRow: "auto",
            //backgroundColor: `${years_semesters.years[Math.floor(index/2)].has_summer} ? ${season_colors[Math.floor(index/2) % season_colors.length]} : ${season_colors[Math.floor(index/2) % season_colors.length] }`
            backgroundColor: `${
              Colors.PrimaryArr[
                Math.floor(index / 2) % Colors.PrimaryArr.length
              ]
            }`,
          }}
        >
          Test Mapping {number} ||
          {semesters.total_years} || {semesters.semesters} ||
          {/* {semesters.years[Math.floor(index / 2 - summers)].year} */}
          Year Is: {semesters.years[Math.floor(index / 3)].year}
        </Paper>
      ))}
    </>
  );
};

export default Semesters;
