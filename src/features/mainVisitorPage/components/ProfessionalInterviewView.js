import React from "react";
import './professional-interview.css';

const ProfessionalInterviewView = () =>{
    const professionInterviewComment="https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/comment_1.png";
    const professionInterviewSecondComment="https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/comment_2.png";
    return(
        <div className="professional-interview-container">
            <div className="professional-interview-text">
                <h3 className="sub-title">Interview</h3>
                <h1 className="main-title">공연 예술 전문가 인터뷰<br/>: XR 공연에 있어서의 고려 사항</h1>
            </div>
            <div>
                <img src={professionInterviewComment} alt="Diagrame Information" className="professional-interview-comment-img"/>
                <img src={professionInterviewSecondComment} alt="Diagrame Information" className="professional-interview-comment-img"/>
            </div>
        </div>
    )
}

export default ProfessionalInterviewView;