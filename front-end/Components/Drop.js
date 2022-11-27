import {useState} from 'react';
import { FaAccessibleIcon } from "react-icons/fa";

function Drop() {
    const[icon,setIcon]=useState("selectIcon");

    const handleOnChange = (e) => {
        setIcon(e.target.value);   
    };
    const makeFirstLetterCapital = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };
    const renderResult = () => {
        let result;
        icon === "selectIcon"
        ? (result = "select the icon")
        : (result = makeFirstLetterCapital(icon));
      return result;
    };

return (
    <>
    <div className="container mt-3">
    <div>
    </div>
    <div className="mt-4">
    <select className="form-select" value={icon} onChange={handleOnChange}>
        <option value="selectIcons">Select the icon</option>
        <option value="1"
                icon={<FaAccessibleIcon />}>
            <FaAccessibleIcon />
        </option>
        <option value="2"
                Icon={<FaAccessibleIcon />}>
            <FaAccessibleIcon />
        </option>
        <option value="3"
                Icon={<FaAccessibleIcon />}>
            <FaAccessibleIcon />
        </option>
      </select>
    </div>
    <div>
      <h1>{renderResult()}</h1>
    </div>
    </div>
    </>
);
}

export default Drop;