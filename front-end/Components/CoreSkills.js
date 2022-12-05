//This iterates over the CoreSkill components and is responsible for the entire column of Row labels

import React, { useContext } from "react";
import styles from "../styles/Map.module.css";
import CoreSkill from "./CoreSkill";
import Colors from "./Colors";

import { useCoreSkillsContext } from "../contexts/skills";

const skill_colors = [
  Colors.secondaryDarkest,
  Colors.secondaryDark,
  Colors.secondaryMain,
  Colors.secondaryLight,
  Colors.secondaryLightest,
];

const CoreSkills = () => {
  const [coreSkills, setCoreSkills] = useCoreSkillsContext();
  return (
    <div
      className={styles.skills}
      style={{ backgroundColor: Colors.background }}
    >
      {coreSkills.map((skill, index) => (
        <>
          <CoreSkill
            title={skill.skill_name}
            color={skill_colors[index % skill_colors.length]}
            style={{ padding: "5%" }}
          />
        </>
      ))}
    </div>
  );
};

export default CoreSkills;
