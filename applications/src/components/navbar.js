import { Menu } from 'antd';

function NavBar(props) {
  return (
    <>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Apply for License</Menu.Item>
        <Menu.Item key="3">Log In</Menu.Item>
        <Menu.Item key="3">Sign Up</Menu.Item>
        <Menu.Item key="4">Account</Menu.Item>        
      </Menu>
    </>
  );
}

export default NavBar;