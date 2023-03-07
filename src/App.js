import Navbar from './components/Navbar.jsx';
import Login from './Login.js'
import MainHomePage from './MainHomePage.jsx';
import SignUp from "./SignUp.js"
import { Route, Routes } from 'react-router-dom';
import ShowUserDetail from './ShowUserDetail.js';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route  path = "" element = {<MainHomePage/>} />
      <Route path = "/login" element = {<Login/>} />
      <Route path = "/signup" element = {<SignUp/>} />
      <Route path = "/detail" element = {<ShowUserDetail/>} />
    </Routes>
    </>
  );
}
export default App;
