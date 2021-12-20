
import { Route, Routes } from 'react-router-dom';
import Signup from './component/Signup'
import Login from './component/Login';
import Main from './MainPage'

function App() {
  return (
      <Routes>
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>} />
        <Route exact path="/" element={<Main/>} />
      </Routes>
  );
}

export default App;
