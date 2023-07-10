import React, { useState } from 'react';
import './SideBar.css';
import side_topicList from './sideBarTopic.json' // Import json file in react

export default function Sidebar() {
  const [sideList, setSideList] = useState(side_topicList ); //setSideList is function to set sideList Variable 
  // we can't set sideList by assignment method

  return (
    <aside>
      <ul className='aside_List'>
        {sideList.map((item,index) => (
          <li key={index}><a href={item.link}>{item.name}</a></li>
        ))}
      </ul>
    </aside>
  );
}
