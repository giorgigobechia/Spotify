import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout } from 'antd';
import Head from "./spotifyHeader/Header";
import Main from 'main/Main';

function App() {
    const { Header, Footer, Sider, Content } = Layout;
    return (
    <div className="App">
        <Layout>
            <Sider>Sider</Sider>
            <Layout>
                <Header>
                <Head/> 
                </Header>
                <Content><div className="conent-wrapper">
                <h1 className="good-afternoon">Good Afternoon</h1>
                <Main/>
                </div></Content>
                <Footer>Footer</Footer>
             </Layout>
             <Sider>Sider</Sider>
        </Layout>
    </div>
  );
}

export default App;
