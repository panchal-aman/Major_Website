import logo from './logo.svg';
import Navbar from './Component/NavBar/Navbar';
import './App.css';
import Sidebar from './Component/SideBar/Sidebar';
import Article from './Component/Article/Article';

function App() {
  return (
    <>
      <Navbar />
      <Sidebar/>
      <Article/>
    </>
  );
}

export default App;
