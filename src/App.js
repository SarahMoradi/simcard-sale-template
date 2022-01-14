import { Route, Routes } from "react-router-dom";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Main from "./MainPage";
import AboutUs from "./component/AboutUs";
import Support from "./component/support";
import Questions from "./component/questions";
import Offers from "./component/offers"

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="aboutUs" element={<AboutUs />} />
      <Route path="support" element={<Support />} />
      <Route path="questions" element={<Questions />} />
      <Route path="offers" element={<Offers />} />
      <Route exact path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
