import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillHome
} from "react-icons/ai";

import { FaHistory} from 'react-icons/fa'
import {MdHelp,MdAccountCircle, MdOutlineFavorite,MdCollections,MdSettingsSuggest} from 'react-icons/md'
import { Link } from "react-router-dom";

function TopNav() {
  const [sideNav, setSideNav] = useState(false);
  return (
    <div className="topNav">
      <div className="d-flex align-items-center">
        <div onClick={() => setSideNav(!sideNav)} className="menuBar">
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="title">
          Perfect
          <span className="font-bold m-2">Picks</span>
        </h1>
       
      </div>
      <Link to="/Home" className="top-homeicons">
         <AiFillHome size={25} title="Go to Home"/>
          
      </Link>
  
      {/* <div className="searchBar">
        <AiOutlineSearch size={25} />
        <input
          className="searchBar-input"
          type="text"
          placeholder="search by color"
        />
      </div> */}

      <Link to="/favorite" className="fav">
        <MdOutlineFavorite size={25} title="Go to Favorite"/>
      </Link>
       
      <Link to="/signin" className="logout">
        Logout 
      </Link>
      
      {sideNav ? (
      <div className="sideBar"
      onClick={() => setSideNav(!sideNav)} 
      ></div>
      ) : (
        ""
      )}
      {/* Conditions for sideNav Appear */}
      <div className={ 
        sideNav ? "side-menu"
        :"side-menu1"
      }
      >

       
      <AiOutlineClose onClick={() => setSideNav(!sideNav)} size={25} 
      className="closelogo"/>
      <h2 className='first'>Perfect <span className='font-bold'>Picks</span></h2>
      <nav>
        <ul className="unorderList">

          <li className="listItem">
          <MdAccountCircle size={26} className="icons"/>
           My Account
          </li>

          <Link  to='/todaySuggest' className="listItem coll">
          <MdSettingsSuggest size={25} className="icons"/>
          Today Suggestions
          </Link>

          <Link to='/favorite' className="listItem coll">
          <MdOutlineFavorite size={25} className="icons"/>
           My Favorite
           </Link>       

          <Link to='/collection' className="listItem coll">
          <MdCollections size={25} className="icons"/>
          My Collections
          </Link>       


          <Link to='/history' className="listItem coll">
          <FaHistory size={25} className="icons"/>
          History
          </Link>       


          <li className="listItem">
          <MdHelp size={25} className="icons"/>
           Help
          </li>
        </ul>
      </nav>
      </div>
    </div>
  );
};

export default TopNav;
