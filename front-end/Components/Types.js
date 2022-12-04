//This component receives an array of Type components and iterates through them
//Should be able to display the icons for the array of $oids sent to it from a course

import Type from "./Type";
import { useTypesContext } from "../contexts/types";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";

//copies of dummy data   this needs to be tweaked to work correctly with database data
//oid sent from at least one component level up--> courses
// const types1 = [
//       {
//         "_id": {
//           "$oid": "632bb5313b2e349d9cfebcbd"
//         },
//         "type_map": "Software Engineering",
//         "type_name": "Labs & Experimental Learning (ISELF VizLab)",
//         "type_information": "",
//         "type_icon": "URL for icon or path to it on the server"
//       },{
//         "_id": {
//           "$oid": "632bb5f20e17f09d9c34c023"
//         },
//         "type_map": "Software Engineering",
//         "type_name": "Read Search & Discuss (Exploratory assignment: literature review + oral presentaion + report)",
//         "type_information": "",
//         "type_icon": "URL for icon or path to it on the server"
//       },{
//         "_id": {
//           "$oid": "632bb5fd0e17f09d9c34c024"
//         },
//         "type_map": "Software Engineering",
//         "type_name": "Group-based Semester Long Industry-Directed Projects",
//         "type_information": "",
//         "type_icon": "URL for icon or path to it on the server"
//       },{
//         "_id": {
//           "$oid": "632bb60a0e17f09d9c34c025"
//         },
//         "type_map": "Software Engineering",
//         "type_name": "Research Activities",
//         "type_information": "",
//         "type_icon": "URL for icon or path to it on the server"
//       },{
//         "_id": {
//           "$oid": "632bb6160e17f09d9c34c026"
//         },
//         "type_map": "Software Engineering",
//         "type_name": "Professional Working Experience",
//         "type_information": "",
//         "type_icon": "URL for icon or path to it on the server"
//       }
//    ]

// const types = [
//     {
//         "type_map": "Software Engineering",
//         "type_name": "Professional Working Experience",
//         "type_information": "",
//         "type_icon": <RiComputerFill style={{color: 'gray'}}/>,
//         "type_color": 'orange'
//     },
//     {
//         "type_map": "Software Engineering",
//         "type_name": "Read Search & Discuss (Exploratory assignment: literature review + oral presentaion + report)",
//         "type_information": "",
//         "type_icon": <GiArchiveResearch />,
//         "type_color": 'red'
//     },
// ]

//TODO: Learn to pass color component and update icon coloring
//TODO: Check on centering of text in course component when there are multiple types
const Types = ({ type_to_find }) => {
  const [types, setTypes] = useTypesContext();
  console.log("Y5 -> in types: type to find is: ", type_to_find);
  console.log("Y5 -> in types: types context is: ", types);

  //const getType = types.filter(type.type_id == type_to_find);
  const getType = (type) => type.type_id == type_to_find;

  const foundType = types.filter(getType);
  console.log("Y5 -> in types: foundType is: ", foundType);
  console.log("Y5 -> in types: foundType name is: ", foundType[0].type_name);

  return (
    <>
      {foundType.map((type, index) => (
        <Tooltip title={type.type_name}>
          <Box key={index}>
            {/* <Type type_icon={type.type_icon} type_name={type.type_name} /> */}
            <Type type_icon={type.type_icon} />
          </Box>
        </Tooltip>
      ))}
    </>
  );
};

export default Types;

// (
//     <div>
//       <Type
//         type_icon={type.type_icon}
//         type_icon2={type.type_icon}
//         type_color={type.type_color}
//       />
//     </div>
// ))
