import Type from "./Type";
import styles from "../styles/Map.module.css";

import { useTypesContext } from "../contexts/types";
import { Box } from "@mui/material";

//TODO figure out spacing on Type component so icon and text in key are not pushed together
const TypesKey = () => {
  const [types, setTypes] = useTypesContext();
  return (
    <div className={styles.keyRow}>
      <div className={styles.keyText}>
        {types.map((type, index) => (
          //TODO: Update types context object to have an ID and change this key
          <Box key={index}>
            <Type type_icon={type.type_icon} type_name={type.type_name} />
          </Box>
        ))}
      </div>
    </div>
  );
};

export default TypesKey;
