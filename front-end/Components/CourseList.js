import React, { useState } from 'react';
import Assign from './Assign';
import Cours from './Cours';
import styles from "../styles/advisor.module.css";

function CourseList() {
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
      
      <Assign onSubmit={addCourse} />
      <Cours
        courses={courses}
        completeCourse={completeCourse}
        removeCourse={removeCourse}
        updateCourse={updateCourse}
      />
    </>
  );
}

export default CourseList;