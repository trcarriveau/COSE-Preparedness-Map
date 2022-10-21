import styles from "../styles/Map.module.css";

//internal components
import Year from "../components/Year";
import CoreSkill from "../components/CoreSkill";
import CoreSkills from "../components/CoreSkills";
import Colors from "../components/Colors";
import Course from "../components/Course";
import Courses from "../components/Courses";
import Extracurricular from "../components/Extracurricular";
import Season from "../components/Season";
import Seasons from "../components/Seasons";
import Semester from "../components/Semester";
import Type from "../components/Type";
import Years from "../Components/Years";

//icons (from react-icons)
import { RiComputerFill } from "react-icons/ri";
import { GiArchiveResearch } from "react-icons/gi";
import { GrGroup } from "react-icons/gr";
import { BsTriangleFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { GiCube } from "react-icons/gi";

//test data for types
// import type_data from '../components/test_objects/cose-types.json'
import type_data from "../components/test_objects/cose-types.json";
import skill_data from "../Components/test_objects/cose-skills.json";
import map_data from "../Components/test_objects/cose-maps.json";

import { useEffect, useState } from "react";
import Types from "../components/Types";
import Extracurriculars from "../components/Extracurriculars";
import SemestersRow from "../components/SemestersRow";
import TypesKey from "../components/TypesKey";

//Context
import { useMapDataContext } from "../contexts/mapdata";
import { useCoreSkillsContext } from "../contexts/skills";
import { useTypesContext } from "../contexts/types";

function Map() {
  const [mapData, setMapData] = useMapDataContext();
  const [coreSkills, setCoreSkills] = useCoreSkillsContext();
  const [types, setTypes] = useTypesContext();

  console.log("Map Data from Context");
  console.log(mapData);

  console.log("Skill Data from Context");
  console.log(coreSkills);

  console.log("Type Data from Context");
  console.log(types);

  //testing reading JSON info
  // const [types, setTypes] = useState(
  //   {
  //       type_map: "Software Engineering",
  //       type_name: "Labs & Experimental Learning (ISELF VizLab)",
  //       type_information: "",
  //       type_icon: GrGroup
  //   }

  // )

  const [skills, setSkills] = useState(skill_data);
  const [career_map, setcareer_Map] = useState(map_data);
  const [map, setMap] = useState(null);
  const [mapItems, setMapItems] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // console.log(type_data)

  //   useEffect( () => {
  //     const getMap = async () => {
  //         const res = await fetch ('../../back-end/mongo/schema/cose-maps.json')
  //         console.log(res)
  //         // const data = await res.json()
  //         // console.log(data)
  //     }
  //     getMap()
  //   })

  //   useEffect( () => {
  //     setIsLoading(true)
  //     fetchMap()
  //     setIsLoading(false)
  //   })

  useEffect(() => {
    setIsLoading(true);
    fetch("./api/cose-map")
      .then((res) => res.json())
      .then((data) => {
        setMap(data);
        setIsLoading(false);
      });
    console.log("Map.js Use Effect: map: ", map);
  }, []);

  console.log("after setting map is: ", map);
  if (isLoading) return <p>Loading...</p>;
  if (!map) return <p>No map available for selected major</p>;

  return (
    <div style={{ backgroundColor: Colors.background }}>
      <Years />
      <Seasons total_years={4} />

      <div
        className={styles.middle}
        style={{ backgroundColor: Colors.background }}
      >
        <CoreSkills skills={skills} />
        <div className={styles.semesters_all}>
          {/* //TODO: Add a Width/Years Variable if expanding beyond 4 years */}

          {/* ******************** Core Skill 1 ************************ */}

          <SemestersRow total_years={4} />
          {/* ******************** Core Skill 2 ************************ */}

          <SemestersRow total_years={4} />
          {/* ******************** Core Skill 3 ************************ */}

          <SemestersRow total_years={4} />
          {/* ******************** Core Skill 4 ************************ */}

          <SemestersRow total_years={4} />

          {/* ******************** Core Skill 5 ************************ */}

          <SemestersRow total_years={4} />
        </div>
      </div>
      {/*TODO styles.key area needs to be converted to component to iterate through types */}
      <div className={styles.key}>
        <TypesKey />

        {/* **************TESTING AREA********* */}

        <div>
          {career_map.map((items) => (
            <>
              Map test:
              {items.map_name}
            </>
          ))}
        </div>

        <div>
          {career_map
            .filter((c_map) => c_map.map_name == "Software Engineering")
            .map((filteredMap) => (
              <>
                Filtered Map:
                {filteredMap.map_name}
              </>
            ))}
        </div>

        <button onClick={fetchMap}>test fetchMap</button>

        {/* **************TESTING AREA********* */}

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
      </div>
    </div>
  );
}

export default Map;
