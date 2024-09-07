import React from 'react';
import Sidebar from './Sidebar';
 import Profile from './Profile/Profile.jsx'
import Course from './Content/Course.jsx';
import Student from './Student.jsx';
import Course_Material from './Course_Material.jsx';
import Create_Edit from './Create_Edit.jsx';
import { Route, Routes } from 'react-router-dom';
import './App.css'; 

const App = () => {
  return (
    <>   
  
    <div className="app-containeer">
      <div id='sideeBar'>  
      <Sidebar/> 
      </div>
      <div className="main-content">
        <Routes>
          <Route path='/Profile' element={<Profile/>} />
          <Route path='/Course' element={<Course />}/>  
          <Route path='/Student' element={<Student />}/>  
          <Route path='/Course_Material' element={<Course_Material />}/>  
          <Route path='/Create_Edit' element={<Create_Edit />}/>  
         
        </Routes>
      </div>
    </div>
    </>
  );
}            
export default App;
