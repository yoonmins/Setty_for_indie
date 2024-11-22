import React from "react";
import './mainViewStyle.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import InfomationIntroduceViewPage from "../components/InfoIntroView";
import PersonalProfileViewPage from "../components/PersonalProfileView";
import DiagramInfoViewPage from "../components/DiagramInfoView";
import ProcessinformationProcessView from "../components/ProcessInfoView";
import ProfessionalInterviewView from "../components/ProfessionalInterviewView";

const MainView = () =>{
    return(
        <div>
            <MainInfoPage />
            <InfomationIntroduceViewPage />
            <ProfessionalInterviewView />
            <ProcessinformationProcessView />
            <PersonalProfileViewPage />
            <DiagramInfoViewPage />
        </div>
    );
}

export default MainView;

const MainInfoPage=()=>{
    const SettyLogo = "https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty_logo.png";
    return(
        <div className="main-view-container">
        <Container fluid>
            <Col>
                <Row md={7}>
                    <Col md={6}>
                        <img className="main-logo" src={SettyLogo} alt="Setty logo"/>
                    </Col>
                </Row>
                <Row>
                    <Col md={2}>
                    </Col>
                    <Col md={3} className="maintitle-intro">
                        <h2>인디 뮤지션을 위한 <br/>XR 가상 무대 생성 플랫폼</h2>
                        <p>Interaction project</p>
                    </Col>
                    <Col md={5}>
                        <p className="subtitle-intro">
                                Setty는 뮤지션과 관객 간의 연결고리를 마련해 근미래 XR 공연 생태계의 선순환 구조를 구축하는 플랫폼입니다.
                                가상 공간에서의 무한한 확장 가능성을 활용하여 그들의 기존 팬을 포함한 대중들과의 몰입형 상호작용을 가능케 합니다.
                                관객들은 각 곡의 감성과 스토리에 기인하여 디자인된 환경 속에서 공연을 관람하며 단순한 청취를 넘어 새로운 형태의 몰입감을 즐길 수 있습니다.
                                <br />
                                Setty는 뮤지션과 관객 간의 다감각적 소통을 통해 가상 공연 문화를 선도하고자 합니다.
                        </p>
                    </Col>
                    <Col md={2}>
                    </Col>
                </Row>
            </Col>
        </Container>
        </div>
    );
}