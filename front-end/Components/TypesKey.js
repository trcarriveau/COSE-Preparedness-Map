import Type from "./Type";
import Types from "./Types";
import styles from "../styles/Map.module.css";
import Colors from "./Colors";

import { useTypesContext } from "../contexts/types";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";

//TODO figure out spacing on Type component so icon and text in key are not pushed together
const TypesKey = () => {
  const [types, setTypes] = useTypesContext();

  return (
    <Paper
      className={styles.keyRow}
      elevation={10}
      // style={{ backgroundColor: Colors.primaryLightest }}
    >
      {/* <Types type_to_find={"632bb5313b2e349d9cfebcbd"} /> */}
      <div className={styles.keyText}>
        {types.map((type, index) => (
          //TODO: Update types context object to have an ID and change this key
          //<Tooltip title={type.type_name}>
          <Box key={index}>
            <Type
              type_icon={type.type_icon}
              type_name={type.type_name}
              color={Colors.primaryLightest}
            />
          </Box>
          //</Tooltip>
        ))}
      </div>
    </Paper>
  );
};

export default TypesKey;
