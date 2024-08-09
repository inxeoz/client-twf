import React, { createContext, useState, useContext } from 'react';

// Create a context for courses
const CourseContext = createContext();

// Create a provider component
export const CourseProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollCourse = (course) => {
    setEnrolledCourses((prevCourses) => [...prevCourses, course]);
  };

  const removeCourse = (courseToRemove) => {
    setEnrolledCourses((prevCourses) =>
      prevCourses.filter((course) => course.title !== courseToRemove.title)
    );
  };


  return (
    <CourseContext.Provider value={{ enrolledCourses, enrollCourse, removeCourse }}>
      {children}
    </CourseContext.Provider>
  );
};

// Custom hook to use the CourseContext
export const useCourseContext = () => useContext(CourseContext);

