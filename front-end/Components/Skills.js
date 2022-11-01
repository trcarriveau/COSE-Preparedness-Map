import React, { useState } from 'react';
import Core from './Core';
import Cors from './Cors';
import styles from "../styles/advisor.module.css";

function Skills() {
  const [courses, setCourses] = useState([]);

  const addCourse = course => {
    if (!course.text || /^\s*$/.test(course.text)) {
      return;
    }

    const newCourses = [course, ...courses];

    setCourses(newCourses);
    console.log(...courses);
  };

  const updateCourse = (courseId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setCourses(prev => prev.map(item => (item.id === courseId ? newValue : item)));
  };

  const removeCourse = id => {
    const removedArr = [...courses].filter(course => course.id !== id);

    setCourses(removedArr);
  };

  const completeCourse = id => {
    let updatedCourses = courses.map(course => {
      if (course.id === id) {
        course.isComplete = !course.isComplete;
      }
      return course;
    });
    setCourses(updatedCourses);
  };

  return (
    <>
      
      <Core onSubmit={addCourse} />
      <Cors
        courses={courses}
        completeCourse={completeCourse}
        removeCourse={removeCourse}
        updateCourse={updateCourse}
      />
    </>
  );
}

export default Skills;