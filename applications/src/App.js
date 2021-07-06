import './App.css';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from './components/navbar';
import HomePage from './components/homepage';
import Account from './components/account'; 
import Application from './components/application';
import Applications from './components/applications';
import SignUp from './components/signup';
import Login from './components/login';
import Apply from './components/apply'

const { Header, Content, Footer } = Layout;

function App() {
  return (
  
      <Router>

        <Header> 
          <NavBar /> 
        </Header>

          <Content> 
            <Switch>
			  <Route path="/apply" children={<Apply />} />
              <Route path="/signup" children={<SignUp />} /> 
              <Route path="/applications" children={<Applications />} /> 
              <Route path="/login" children={<Login />} /> 
              <Route path="/account" children={<Account />} /> 
              <Route path="/application/:id" children={<Application />} />
              <Route path="/" children={<HomePage />} />
			  
            </Switch> 
          </Content>
          
        <Footer style={{ textAlign: 'center' }}>Created for 304CEM</Footer> 
      </Router>

  );
}

export default App;
