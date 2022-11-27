import TypesKey from "./TypesKey";
import { useTypesContext } from "../contexts/types";
import Box from "@mui/material/Box";

const AddType = () => {
  const [types, setTypes] = useTypesContext();
  return (
    <Box>
      AddType
      <TypesKey />
    </Box>
  );
};

export default AddType;
