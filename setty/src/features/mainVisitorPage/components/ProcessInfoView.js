import React from "react";
import './process-info.css';

const ProcessInformationProcessView = () =>{
    const processInfoImg = "https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/service_process.png";
    return(
        <div className="process-info-container">
            <div>
                <h3 className="sub-title">Contents sketch</h3>
                <h1 className="main-title">기존 공연 구성 프로세스 중<br/>어떤 부분에서 서비스가 필요할까?</h1>
            </div>
            <div>
                <img src={processInfoImg} alt="Diagrame Information" className="diagram-profile"/>
            </div>
        </div>
    )
}

export default ProcessInformationProcessView;