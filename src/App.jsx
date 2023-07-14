import logo from "./logo.svg";
import Navbar from "./Component/NavBar/Navbar";
import "./App.css";
import Sidebar from "./Component/SideBar/Sidebar";
import Article from "./Component/Article/Article";
import { Route, BrowserRouter as Router, Routes, Switch } from "react-router-dom";

function App() {
  return (
    <>
    this is outside of Router
    <Router>
      <Routes>
        <Route path="/" element={<Navbar/>}></Route>
        <Route path="/Sidebar" element={<Sidebar/>}></Route>
        <Route path="/Article" element={<Article/>}></Route>
      </Routes>
    </Router>
    End of Router file
    </>
  );
}

export default App;
