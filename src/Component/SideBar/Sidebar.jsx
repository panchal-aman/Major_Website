import React, { useState } from 'react';
import './SideBar.css';
import { sidedata } from './sideBarTopic';

export default function Sidebar() {
  const [sideList, setSideList] = useState(sidedata); //setSideList is function to set sideList Variable 
  // we can't set sideList by assignment method

  
  return (
    <aside style={{color:'white'}}>
      <ul className='aside_List'>
        {sideList.map((item,index) => (
          <li key={index}>{item.name} </li>
        ))}
      </ul>
    </aside>
  );
}
