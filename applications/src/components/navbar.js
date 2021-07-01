import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/apply">Apply For a License </Link></Menu.Item>
        <Menu.Item key="3"><Link to="/auth/login">Log In</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/auth/signup">SignUp</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/account">Account</Link></Menu.Item>  
        <Menu.Item key="5"><Link to="/applications">Applications</Link></Menu.Item>      
      </Menu>
    </>
  );
}

export default NavBar;