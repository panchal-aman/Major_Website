import Navbar from './Component/NavBar/Navbar';
import './App.css';
import Sidebar from './Component/SideBar/Sidebar';
import Article from './Component/Article/Article';
import { useState } from 'react';


function App() {
  const [articleLink, setArticleLink] = useState('Need to Pass..');
  return (
    <>
      <Navbar />
      <Sidebar setArticleLink={setArticleLink}/>
      <Article articleLink = {articleLink}/>
    </>
  );
}

export default App;
