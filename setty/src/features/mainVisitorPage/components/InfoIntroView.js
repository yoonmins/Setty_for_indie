import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import './infoCard.css'

const InfomationIntroduceViewPage = () => {
    const infoDiagramImg = "https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/infopage_img.png";
    return(
        <div>
            <Container fluid className="card-container">
                <Row>
                    <div className="card-info">
                        <h3 className="sub-title">Background</h3>
                        <h1 className="main-title">공연계에서의 XR 플랫폼의 필요성</h1>
                        <img src={infoDiagramImg} className="info-diagram-img"alt="diagram Img"/>
                    </div>
                    <InfoCardComponents />
                </Row>
            </Container>
            <InfoDiagramComponents />
        </div>
    );
};

export default InfomationIntroduceViewPage;

const InfoCardComponents = () => {
    return(
        <Container>
            <Row className="justify-content-md-center">
                <Col lg={1}></Col>
                <Col md="auto">
                    <Card style={{ width: '100rem', borderWidth: "0"}}>
                        <Card.Body className="info-card">
                            <Card.Title>
                                <h1>
                                    <span className="h1-main-text">인디 음악인과 대중 간<br />
                                    <span className="h1-point-text">연결 기회</span> 부족
                                    </span>
                                </h1>
                            </Card.Title>
                            <Card.Text className="main-info-text">
                                “ 현재 우리나라 인디 음악계의 문제는<br />
                                ‘대중과 담을 쌓고 자기 하고 싶은 음악만 하는 아집’이 아니다.<br />
                                진짜 문제는, 인디 음악인들과 (잠재적으로 그들의 수요자가 될 수 있는)<br />
                                <strong>많은 대중들과의 연결 고리가 절대적으로 부족하다</strong>는 것에 있다. ”
                            </Card.Text>
                            <p className="footer-text">이규탁, 2016, “인디음악이란 무엇이고, 문제는 무엇인가”, 직썰, https://www.ziksir.com/news/articleView.html?idxno=436</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card style={{ width: '100rem', borderWidth: "0" }}>
                        <Card.Body className="info-card">
                            <Card.Title>
                                <h1>
                                    <span className="h1-point-text">
                                        공연 예술과 XR 기술
                                    </span>
                                    <span className="h1-main-text">
                                        의<br />접목 가능성의 대두
                                    </span>
                                </h1>
                            </Card.Title>
                            <Card.Text className="main-info-text">
                                “ 공연예술의 경우 시대의 흐름에 앞서서 <strong>확장 현실을 활용하는 신기술<br />
                                적용에 입각한 콘텐츠</strong>를 만들어 낼 필요가 있음을 나타냈다. ··· 메타버스<br />
                                환경에서의 확장 현실은 코로나로 인하여 문화예술 분야의 바로 앞까지<br />
                                왔으며, 공연예술 또한 예외가 아니거나 가장 먼저 적용되는 분야이다. ”
                            </Card.Text>
                            <p className="footer-text">양수진. "메타버스 환경에서 확장 현실(XR) 기술을 적용한 공연예술에 관한 연구." 국내박사학위논문 상명대학교 일반대학원, 2022. 서울</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={1}></Col>
            </Row>
        </Container>
    );
}

const InfoDiagramComponents =()=>{
    const infoDiagramImg ="https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/indie_info_img.png";
    const backgroundInfoImg ="https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/middlebackground_img_info.png";

    return(
        <div>
            <div className="info-diagram-container">
                <div className="info-diagram-title-text">
                    <h3 className="sub-title">Target</h3>
                    <h1 className="main-title">공연예술 분야에서<br/>XR의 도움이 필요한 사람은 누구일까?</h1>
                </div>
                <div>
                    <img src={infoDiagramImg} alt="Diagrame Information" className="info-diagram-target-img"/>
                </div>
            </div>
            <div className="info-diagram-sub-container">
                <div className="info-diagram-sub-text">
                    <h3 className="sub-title">Project goal</h3>
                    <h1 className="main-title">이들에게 가장 필요한 건 무엇일까?<br />XR로 줄 수 있는 현실적인 도움은 어떤 것이 있을까?</h1>
                </div>
                <img src={backgroundInfoImg} alt="info" className="info-diagram-sub-img"/>
            </div>
        </div>
    );
}