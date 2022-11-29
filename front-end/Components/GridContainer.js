import { useYearsSemestersContext } from "../contexts/years_semesters";
import { useCoreSkillsContext } from "../contexts/skills";
import Colors from "./Colors";

//Imports during testing
import Semesters from "./grid_components/Semesters";
import Semesters2 from "./grid_components/Semesters2";

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const test2 = [1, 20, 3, 4, 5, 6, 7, 8, 9];
const test3 = [10, 2, 3, 4, 5, 6, 7, 8, 9];
const test4 = [100, 2, 3, 4, 5, 6, 7, 8, 9];
const test5 = [1000, 2, 3, 4, 5, 6, 7, 8, 9];
const GridContainer = ({ columns, rows }) => {
  const [years_semesters, setYears_Semesters] = useYearsSemestersContext();
  const [coreSkills, setCoreSkills] = useCoreSkillsContext();

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
      {coreSkills.map((skill) => (
        <>
          <Semesters2 columns={columns} skill_name={skill.skill_name} />
        </>
      ))}
    </div>
  );
};

export default GridContainer;
