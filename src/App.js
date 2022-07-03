import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './screens/Welcome';
import DisplayQR from './screens/DisplayQR';
import Home from './screens/Home'
import AppHeader from './components/AppHeader';
import { Layout, Menu } from 'antd';
import React, {useState} from 'react';
import 'antd/dist/antd.css';


import './styles/App.scss';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content }  = Layout;

function App() {
  const connect = () => {
    
  }

  const menuItems = 
  [
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'nav 1',
    },
    {
      key: '2',
      icon: <VideoCameraOutlined />,
      label: 'nav 2',
    },
    {
      key: '3',
      icon: <UploadOutlined />,
      label: 'nav 3',
    },
  ]
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{height:"100vh"}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" >Hello</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={menuItems}
        />
      </Sider>
      <Layout>
      <BrowserRouter>

        <Header className='header'>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content>
          <div className='App'>
            <Routes>
              <Route path="/" element={<Welcome/>}/>
              <Route path="/qr" element={<DisplayQR/>}/>
              <Route path="/home" element={<Home/>}/>
            </Routes>
        

          </div>
        </Content>
        </BrowserRouter>
      </Layout>
    </Layout>
  );
}

export default App;
