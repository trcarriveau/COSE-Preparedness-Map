import { useYearsSemestersContext } from "../contexts/years_semesters";
import Colors from "./Colors";

//Imports during testing
import Semesters from "./grid_components/Semesters";
import Semester2 from "./grid_components/Semester2";

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const test2 = [1, 20, 3, 4, 5, 6, 7, 8, 9];
const test3 = [10, 2, 3, 4, 5, 6, 7, 8, 9];
const test4 = [100, 2, 3, 4, 5, 6, 7, 8, 9];
const test5 = [1000, 2, 3, 4, 5, 6, 7, 8, 9];
const GridContainer = ({ columns, rows }) => {
  const [years_semesters, setYears_Semesters] = useYearsSemestersContext();

  return (
    <div
      style={{
        flex: 1 /* fills the remaining part of the viewport below header */,
        background: `${Colors.background}`,
        // background: "white",
        display: "grid",
        gridColumnCount: 9,
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridGap: "2px",
      }}
    >
      <Semesters columns={columns} data={test} />
      <Semesters columns={columns} data={test2} />
      <Semesters columns={columns} data={test3} />
      <Semesters columns={columns} data={test4} />
      <Semesters columns={columns} data={test5} />
    </div>
  );
};

export default GridContainer;
