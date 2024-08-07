import LoginForm from "./LoginForm";
import Main from "./Main";
import SignupForm from "./SignupForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import DonationForm from "./DonationForm";
const App = () => {
  return (
    <>
      { <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/SignupForm" element={<SignupForm />} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/DonationForm" element={<DonationForm />}></Route>
        </Routes>
      </BrowserRouter>}
    </>
  );
};
export default App;
