import LoginForm from "./Components/Login/LoginForm";
import Main from "./Components/Home/Main";
import SignupForm from "./Components/Login/SignupForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DonationForm from "./Components/Donation/DonationForm";
import { CourseProvider } from "./Components/Context/CreateContext";
import StudentDashboard from "./Components/StudentPortal/Dashboard/StudentDashboard";
import StudentProfile from "./Components/StudentPortal/Profile/StudentProfile";
import StudentClasses from "./Components/StudentPortal/LiveClasses/StudentClasses"
import StudentCourses from "./Components/StudentPortal/Courses/StudentCourses";
import StudentAssignments from "./Components/StudentPortal/Assignments/StudentAssignments";
// import TempDashboard from "./Components/Temp/TempDashboard";
import ForgotPassword from './Components/Login/ForgotPassword';
import PasswordReset from './Components/Login/PasswordReset'
const App = () => {
  return (
    <>
      { <BrowserRouter>
        <CourseProvider>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/SignupForm" element={<SignupForm />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/DonationForm" element={<DonationForm />}></Route>
          <Route path="/PasswordReset" element={<PasswordReset />}></Route>
         

          <Route path="/StudentPortal/StudentDashboard" element={<StudentDashboard />}></Route>
          <Route path="/StudentPortal/StudentProfile" element={<StudentProfile />}></Route>
          <Route path="/StudentPortal/StudentClasses" element={<StudentClasses />}></Route>    
          <Route path="/StudentPortal/StudentCourses" element={<StudentCourses />}></Route>         
          <Route path="/StudentPortal/StudentAssignments" element={<StudentAssignments />}></Route>         
  
        </Routes>
        </CourseProvider>
      </BrowserRouter>}
    </>
  );
};
export default App;
