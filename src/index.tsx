import React from 'react';
import { createRoot } from "react-dom/client";
import PageFooter from "./components/footer";
import Routing from "./components/router";
import PageHeader from "./components/header";
import 'antd/dist/reset.css';
import './css/index.css';
import {Layout} from "antd";

const {Header, Footer, Content} = Layout;
const root = createRoot(document.getElementById("root")!);


root.render(
    <Layout>
        <Header className='header'>
            <PageHeader/>
        </Header>
        <Content className="content">
            <Routing/>
        </Content>
        <Footer className="footer">
            <PageFooter/>
        </Footer>
    </Layout>
);

