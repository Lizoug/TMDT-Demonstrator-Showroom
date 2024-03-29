import React from "react";
import {Row, Col} from 'antd';
import {MailOutlined, LinkedinOutlined, GithubOutlined, InstagramOutlined} from '@ant-design/icons';
import {useMediaQuery} from "react-responsive";
import logo_footer from "./images/TMDT_Logo.png";

export default function PageFooter() {
    const size_xxs = useMediaQuery({query: "(max-device-width: 479px)"});
    const size_xs = useMediaQuery({query: "(min-device-width: 480px) and (max-device-width: 575px)"});
    const size_sm = useMediaQuery({query: "(min-device-width: 576px) and (max-device-width: 767px)"});
    const size_md = useMediaQuery({query: "(min-device-width: 768px) and (max-device-width: 991px)" });
    const size_lg = useMediaQuery({query: "(min-device-width: 992px) and (max-device-width: 1199px)"});
    const size_xl = useMediaQuery({query: "(min-device-width: 1200px) and (max-device-width: 1599px)"});
    const size_xxl = useMediaQuery({query: "(min-device-width: 1600px)"});
    return (
        <div>
            {size_xxs && <PageFooterXS />}
            {size_xs && <PageFooterXS />}
            {size_sm && <PageFooterSM />}
            {size_md && <PageFooterLG />}
            {size_lg && <PageFooterLG />}
            {size_xl && <PageFooterXXL />}
            {size_xxl && <PageFooterXXL />}
        </div>
    );
}

function PageFooterXXL() {
    return (
        <div>
            <Row>
                <Col flex={6}> </Col>
                <Col flex={1}>
                    <img src={logo_footer} className={'footer-logo'} alt="Logo"/>
                </Col>
                <Col flex={1}>
                    <Row>
                        <h6 className="footer-title">Über TMDT</h6>
                    </Row>
                    <Row>
                        <a className="footer-link" href="/impressum">Impressum</a>
                    </Row>
                    <Row>
                        <a className="footer-link" href="/datenschutz">Datenschutzerklärung</a>
                    </Row>
                </Col>
                <Col flex={1}>
                    <Row>
                        <h6 className="footer-title">Kontakt</h6>
                    </Row>
                    <Row align="middle">
                        <MailOutlined style={{color: "whitesmoke", paddingRight: "10px"}}/> <a className="footer-link" href="tmdtinfo@uni-wuppertal.de">tmdtinfo@uni-wuppertal.de</a>
                    </Row>
                </Col>
                <Col flex={1}>
                    <Row>
                        <h6 className="footer-title">Follow Us!</h6>
                    </Row>
                    <Row align="middle">
                        <LinkedinOutlined style={{color: "whitesmoke", paddingRight: "10px"}}/> <a className="footer-link" href="https://www.linkedin.com/company/tmdt/mycompany//">LinkedIn</a>
                    </Row>
                    <Row align="middle">
                        <GithubOutlined style={{color: "whitesmoke", paddingRight: "10px"}}/> <a className="footer-link" href="https://github.com/tmdt-buw">GitHub</a>
                    </Row>
                    <Row align="middle">
                        <InstagramOutlined style={{color: "whitesmoke", paddingRight: "10px"}}/> <a className="footer-link" href="https://www.instagram.com/tmdt_wuppertal/">Instagram</a>
                    </Row>
                </Col>
                <Col flex={6}> </Col>
            </Row>
        </div>
    );
}

function PageFooterLG() {
    return (
        <div>
            <Row>
                <Col flex={1}>
                    <img src={logo_footer} className={'footer-logo'} alt="Logo"/>
                </Col>
                <Col flex={1}>
                    <Row>
                        <h6 className="footer-title">Über TMDTs</h6>
                    </Row>
                    <Row>
                        <a className="footer-link" href="/impressum">Impressum</a>
                    </Row>
                    <Row>
                        <a className="footer-link" href="/datenschutz">Datenschutzerklärung</a>
                    </Row>
                </Col>
                <Col flex={1}>
                    <Row>
                        <h6 className="footer-title">Kontakt</h6>
                    </Row>
                    <Row align="middle">
                        <MailOutlined style={{color: "whitesmoke", paddingRight: "10px"}}/> <a className="footer-link" href="tmdtinfo@uni-wuppertal.de">tmdtinfo@uni-wuppertal.de</a>
                    </Row>
                </Col>
                <Col flex={1}>
                    <Row>
                        <h6 className="footer-title">Follow Us!</h6>
                    </Row>
                    <Row align="middle">
                        <LinkedinOutlined style={{color: "whitesmoke", paddingRight: "10px"}}/> <a className="footer-link" href="https://www.linkedin.com/company/foxes-hedgehogs/">LinkedIn</a>
                    </Row>
                    <Row align="middle">
                        <GithubOutlined style={{color: "whitesmoke", paddingRight: "10px"}}/> <a className="footer-link" href="https://github.com/tmdt-buw">GitHub</a>
                    </Row>
                    <Row align="middle">
                        <InstagramOutlined style={{color: "whitesmoke", paddingRight: "10px"}}/> <a className="footer-link" href="https://www.instagram.com/tmdt_wuppertal/">Instagram</a>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

function PageFooterSM() {
    return (
        <div>
            <Row>
                <Col flex={1}>
                    <img src={logo_footer} className='footer-logo' alt="Logo"/>
                </Col>
                <Col flex={1}> </Col>
                <Col flex={1}>
                    <Row>
                        <h6 className="footer-title">Über Foxes & Hedgehogs</h6>
                    </Row>
                    <Row>
                        <a className="footer-link_l" href="/impressum">Impressum</a>
                    </Row>
                    <Row>
                        <a className="footer-link_l" href="/datenschutz">Datenschutzerklärung</a>
                    </Row>
                    <Row className="padded-t25">
                        <h6 className="footer-title">Kontakt</h6>
                    </Row>
                    <Row align="middle">
                        <MailOutlined style={{color: "whitesmoke", paddingRight: "10px"}}/> <a className="footer-link_l" href="tmdtinfo@uni-wuppertal.de">tmdtinfo@uni-wuppertal.de</a>
                    </Row>
                </Col>
                <Col flex={1}>
                    <Row>
                        <h6 className="footer-title">Follow Us!</h6>
                    </Row>
                    <Row align="middle">
                        <LinkedinOutlined style={{color: "whitesmoke", paddingRight: "10px"}}/> <a className="footer-link_l" href="https://www.linkedin.com/company/tmdt/mycompany//">LinkedIn</a>
                    </Row>
                    <Row align="middle">
                        <GithubOutlined style={{color: "whitesmoke", paddingRight: "10px"}}/> <a className="footer-link_l" href="https://github.com/tmdt-buw">GitHub</a>
                    </Row>
                    <Row align="middle">
                        <InstagramOutlined style={{color: "whitesmoke", paddingRight: "10px"}}/> <a className="footer-link_l" href="https://www.instagram.com/tmdt_wuppertal/">Instagram</a>
                    </Row>
                </Col>
                <Col flex={1}> </Col>
            </Row>
        </div>
    );
}

function PageFooterXS() {
    return (
        <div>
            <Row justify="space-evenly" align="middle">
                <Col>
                    <Row justify="space-evenly">
                        <img src={logo_footer} className='footer-logo' alt="Logo"/>
                    </Row>
                    <Row>
                        <h6 className="footer-title">Über TMDT</h6>
                    </Row>
                    <Row>
                        <a className="footer-link_l" href="/impressum">Impressum</a>
                    </Row>
                    <Row>
                        <a className="footer-link_l" href="/datenschutz">Datenschutzerklärung</a>
                    </Row>
                    <Row className="padded-t25">
                        <h6 className="footer-title">Kontakt</h6>
                    </Row>
                    <Row align="middle">
                        <MailOutlined style={{color: "whitesmoke", paddingRight: "10px"}}/> <a className="footer-link_l" href="tmdtinfo@uni-wuppertal.de">tmdtinfo@uni-wuppertal.de</a>
                    </Row>
                    <Row className="padded-t25">
                        <h6 className="footer-title">Follow Us!</h6>
                    </Row>
                    <Row align="middle">
                        <LinkedinOutlined style={{color: "whitesmoke", paddingRight: "10px"}}/> <a className="footer-link_l" href="https://www.linkedin.com/company/tmdt/mycompany//">LinkedIn</a>
                    </Row>
                    <Row align="middle">
                        <GithubOutlined style={{color: "whitesmoke", paddingRight: "10px"}}/> <a className="footer-link_l" href="https://github.com/tmdt-buw">GitHub</a>
                    </Row>
                    <Row align="middle">
                        <InstagramOutlined style={{color: "whitesmoke", paddingRight: "10px"}}/> <a className="footer-link_l" href="https://www.instagram.com/tmdt_wuppertal/">Instagram</a>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}
