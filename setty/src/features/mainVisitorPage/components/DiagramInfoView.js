import React from "react";
import './diagram-info.css';

const DiagramInfoViewPage = () =>{
    const diagrameSqureInfo = "https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/diagram_squar.png";
    const diagrameCircleInfo = "https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/diagram_circle.png";
    return(
        <div className="diagram-profile-container">
            <div>
                <h3 className="sub-title">Analysis</h3>
                <h1 className="main-title">어피니티 다이어그램</h1>
                <img src={diagrameSqureInfo} alt="Diagrame Information" className="diagram-profile"/>
            </div>
            <div>
                <h3 className="sub-title">UX goal</h3>
                <h1 className="main-title">사용자 경험의 목표</h1>
                <img src={diagrameCircleInfo} alt="Diagrame Information" className="diagram-profile-ux"/>
            </div>
        </div>
    )
}
export default DiagramInfoViewPage;