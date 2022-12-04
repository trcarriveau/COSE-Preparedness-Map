import { useYearsSemestersContext } from "../contexts/years_semesters";
import { useCoreSkillsContext } from "../contexts/skills";
import Colors from "./Colors";

//Imports during testing
import Semesters from "./grid_components/Semesters";
import Semesters2 from "./grid_components/Semesters2";

const GridContainer = ({ columns, rows }) => {
  const [coreSkills, setCoreSkills] = useCoreSkillsContext();

  return (
    <div
      style={{
        flex: 1 /* fills the remaining part of the viewport below header */,
        background: `${Colors.background}`,
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
