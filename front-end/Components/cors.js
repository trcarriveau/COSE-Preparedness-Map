import React, { useState } from 'react';
import Core from './Core';
import { FaTrashAlt } from "react-icons/fa";
import styles from '../styles/advisor.module.css';
import Colors from './Colors.js';


const Cors = ({ courses, completeCourse, removeCourse, updateCourse }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateCourse(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <Core edit={edit} onSubmit={submitUpdate} />;
  }

  return courses.map((course, index) => (
    <div
    style={{
        display: "flex",
        backgroundColor:"white",
        color: "black",
        justifyContent: "space-between",
        border: "1px solid black",
        alignItems: "center",
        width: "90%",
        margin: "2px",
        padding:"20px",
        
       
    }}

      key={index}
    >
      <div key={course.id} onClick={() => completeCourse(course.id)}>
        {course.text}
      </div>
      <div 
       style={{
        display: "flex",
        marginRight: "10px",
      }}>
        <FaTrashAlt
          onClick={() => removeCourse(course.id)}
          className={styles.deleteIcon}
        />
      </div>
    </div>
  ));
}

export default Cors;