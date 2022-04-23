import Home from "./components/pages/homepage/Home";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Settings from "./components/pages/settings/Settings";
import Singlepage from "./components/pages/singlepage/Singlepage";
import Write from "./components/pages/write/Write";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
  const {user} = useContext(Context);
  return(
  <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/register" element={user?<Home/>:<Register/>} />
        <Route exact path="/login" element={user?<Home/>:<Login/>} />
        <Route exact path="/write" element={user?<Write/>:<Register/>} />
        <Route exact path="/settings" element={user?<Settings/>:<Register/>} />
        <Route exact path="/post/:postId" element={<Singlepage/>} />
      </Routes>
    </Router>
  );
}

export default App;
