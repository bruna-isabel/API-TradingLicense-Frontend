import './App.css';
import { Layout } from 'antd';

import NavBar from './components/navbar';
import HomePage from './components/homepage';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      
      <Header>
        <NavBar />
      </Header>
      
      <Content>
        <HomePage />
      </Content>

      <Footer style={{ textAlign: 'center' }}>Created for Web API Development</Footer>

    </Layout>
  );
}

export default App;
