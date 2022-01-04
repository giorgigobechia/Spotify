import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout } from 'antd';
import Head from "./spotifyHeader/Header";
import ConentTopMain from "./contentTopMain/ContentTopMain";
import ContentMiddleMain from 'contentMiddleMain/ContentMiddleMain';

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
                <ConentTopMain/>
                <h1 className="jumb-back-in">Jump Back-In</h1>
                <ContentMiddleMain/>
                </div>
                
                </Content>
                <Footer>Footer</Footer>
             </Layout>
             <Sider>Sider</Sider>
        </Layout>
    </div>
  );
}

export default App;
