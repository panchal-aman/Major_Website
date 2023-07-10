import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'
import { ReactComponent as MySVG } from './Asset/Menu.svg';


export default function Navbar(props) {
    const [search_keyword , setkeyword] = useState("");

    const keyword_search_fun = (evee) =>{ //event is depricated now so use arrow function instead of normal fuction
        setkeyword(evee.target.value);
        console.log(evee.timeStamp)
    }
    
    return (
        <>
            <nav>
                <div className="menu">
                    <a href=""><MySVG className='menu_icon'/></a>
                </div>

                Welcome {props.user}

                <ul className="link_list">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Contacts</a></li>
                </ul>
                <div className="search_bar">
                    <input type="text" name="search_keyword" id="search_keyword" value={search_keyword} onChange={keyword_search_fun} placeholder='Search here..'/>
                </div>
            </nav>

        </>
    )
}

Navbar.prototype = {
    user: PropTypes.string.isRequired,
}
Navbar.defaultProps = {
    user: "User"
}

