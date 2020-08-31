import React, { useState } from "react";
import { Avatar } from "antd";
import { Link } from "react-router-dom";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Blog", path: "/blog" },
  { title: "Contact Us", path: "/contact-us" },
  { title: "Login", path: "/login" },
];

function Navigation({ user }) {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <nav className='site-navigation' role='navigation'>
      <span className='menu-title'>DEVPRO Blog</span>
      <div className={`menu-content-container ${menuActive && "active"}`}>
        <ul>
          {navLinks.map((link, key) => (
            <li key={key}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>

        <span className='menu-avatar-container'>
          <Avatar
            src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
            size={38}
          />
        </span>
        <span className='menu-avatar-name'>{`${user.firstName} ${user.lastName}`}</span>
      </div>
      <i
        className='ionicons icon ion-ios-menu'
        onClick={() => setMenuActive(!menuActive)}
      />
    </nav>
  );
}

export default Navigation;
