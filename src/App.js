import LoginForm from "./LoginForm";
import Main from "./Main";
import SignupForm from "./SignupForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./sidebar";
import DonationForm from "./DonationForm";
const App = () => {
  return (
    <>
      { <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="LoginForm" element={<LoginForm />} />
          <Route path="SignupForm" element={<SignupForm />} />
          <Route path="DonationForm" element={<DonationForm />} />
          <Route path="sidebar" element={<Sidebar/>} />
        </Routes>
      </BrowserRouter>}
    </>
  );
};
export default App;
