import React, { useState } from 'react';
import Activity from './Activity';
import { FaTrashAlt } from "react-icons/fa";
import styles from '../styles/advisor.module.css';
import Colors from './Colors.js';
import { HiCursorClick } from 'react-icons/hi';


const Curricular = ({ courses, completeCourse, removeCourse, updateCourse }) => {
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
    return <Activity edit={edit} onSubmit={submitUpdate} />;
  }

  return courses.map((course, index) => (
    <div
    style={{
      display: "flex",
      backgroundColor: Colors.course,
      color: "white",
      justifyContent: "space-between",
      borderRadius: "10px",
      alignItems: "center",
      width: "90%",
      margin: "2px",
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

export default Curricular;