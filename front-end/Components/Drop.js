import Select from "react-select";
import {FaAccessibleIcon} from "react-icons/fa";
import { useState } from "react";


const options = [
  { value: "1", label: (<div><FaAccessibleIcon /></div>) },
  { value: "2", label: (<div><FaAccessibleIcon /></div>) },
  { value: "3", label: (<div><FaAccessibleIcon /></div>) },
  { value: "3", label: (<div><FaAccessibleIcon /></div>) },
  { value: "3", label: (<div><FaAccessibleIcon /></div>) },
  { value: "3", label: (<div><FaAccessibleIcon /></div>) },
  { value: "3", label: (<div><FaAccessibleIcon /></div>) },
  { value: "3", label: (<div><FaAccessibleIcon /></div>) },
  { value: "3", label: (<div><FaAccessibleIcon /></div>) }
];

function Drop() {
  const [selectedOption, setSelect] = useState(null);
  const handleChange = selectedOption => {
    setSelect(selectedOption);
  };
  return (
    <>
      <Select
        isMulti
        value={selectedOption}
        onChange={handleChange}
        options={options}
        
      />
    </>
      
    
  );
};

export default Drop;