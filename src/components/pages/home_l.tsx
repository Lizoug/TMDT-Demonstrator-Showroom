import React from 'react';
import { Card, Col, Row } from 'antd';
import './../../css/index.css';
import logo_1 from './../images/Automatisierte_Schadbefundung_an_Güterwagons.png';
import logo_2 from "./../images/KI-basierte Qualitätskontrolle beim Schweißen.png";
import logo_3 from "./../images/KI-basierte Planung von Produktionsabläufen.png";
import logo_4 from "./../images/Embeddings von Customer Journey Data.png";
import logo_5 from "./../images/Bergisches Hochwasserwarnsystem.png";
import logo_6 from "./../images/Neural Network Doctor.png";



const { Meta } = Card;

export default function Home_L() {
    // function to handle card click
    const handleCardClick = (url: string) => {
        window.location.href = url;
    };

    const handleCardClickNewTap = (url: string) => {
        window.open(url, '_blank'); // Opens the URL in a new tab
    };

    return (
        <>
            <Row className={"padding-top"} justify="space-evenly">
                <Col span={6}>
                    <Card hoverable cover={<img className="card-image" alt="Modern Design" src={logo_1} />}
                          onClick={() => handleCardClickNewTap('https://inspection-ai.tmdt.uni-wuppertal.de/home')}
                    >
                        <Meta title={<h1 className="card-title">Automatisierte Schadbefundung an Güterwagons</h1>} />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card hoverable cover={<img className="card-image" alt="Clean and Elegant" src={logo_2} />}
                          onClick={() => handleCardClickNewTap('https://welding-ai.tmdt.uni-wuppertal.de/')}
                    >
                        <Meta title={<h1 className="card-title">KI-basierte Qualitätskontrolle beim Schweißen</h1>} />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card hoverable cover={<img className="card-image" alt="Great Support" src={logo_3} />}
                          onClick={() => handleCardClickNewTap('http://ai-planner.tmdt.uni-wuppertal.de/')}
                    >
                        <Meta title={<h1 className="card-title">KI-basierte Planung von Produktionsabläufen
                        </h1>} />
                    </Card>
                </Col>
            </Row>
            <Row className={"padding-top"} justify={"space-evenly"}>
                <Col span={6}>
                    <Card hoverable cover={<img className="card-image" alt="Easy to customise" src={logo_4} />}
                          onClick={() => handleCardClickNewTap('https://customer-embedding.tmdt.uni-wuppertal.de/')}
                    >
                        <Meta title={<h1 className="card-title">Embeddings von Customer Journey Data
                        </h1>} />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card hoverable cover={<img className="card-image" alt="Unlimited Features" src={logo_5} />}
                          onClick={() => handleCardClickNewTap('https://hws.tmdt.uni-wuppertal.de/public-dashboards/be1b084d97ef41e08be1c847b9f4d5ad?orgId=1')}
                    >
                        <Meta title={<h1 className="card-title">Bergisches Hochwasserwarnsystem</h1>} />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card hoverable cover={<img className="card-image" alt="Advanced Options" src={logo_6} />}
                          onClick={() => handleCardClickNewTap('https://inspection-ai.tmdt.uni-wuppertal.de/home')}
                    >
                        <Meta title={<h1 className="card-title">Neural Network Doctor (coming soon)
                        </h1>} />
                    </Card>
                </Col>
            </Row>
        </>
    );
}
