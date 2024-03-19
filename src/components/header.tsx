import { Menu, Row, Col } from "antd";
import React, { useState} from 'react';
import { HomeOutlined, DotChartOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';


export default function PageHeader() {
    const items: MenuProps['items'] = [
        {
            label:
                <a href="/">
                    Home
                </a>,
            key: '/',
            icon: <HomeOutlined />,
        },
        {
            label:
                <a href="/Analysis">
                    Analysis
                </a>,
            key: '/Analysis',
            icon: <DotChartOutlined />,

        }
    ];

    const [current, setCurrent] = useState(window.location.pathname);

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };


    return (
        <div className="header">
            <h1>TMDT Demonstrator Showroom</h1>
        </div>
    )
};
