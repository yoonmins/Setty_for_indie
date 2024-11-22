import React from "react";
import "./personalProfile.css"
import "../../../globalComponents/globalCSSStyling.css";

const PersonalProfileViewPage = () =>{
    const mainProfileInfo = "https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/profile_img.png";
    const firstPersonalInfo = "https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/profile_img_1.png";
    const secondPersonalInfo = "https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/profile_img_2.png";
    const thirdPersonalInfo = "https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/profile_img_3.png";

    return(
        <div>
            <div className="personal-main-container">
                <h3 className="sub-title">Persona</h3>
                <h1 className="main-title">퍼소나 설정</h1>
                <img src={mainProfileInfo} alt="Main Profile img" className="personal-main-container-img" />
            </div>
            <div className="personal-profile-container">
                <h1 className="personal-title">Persona 1</h1>
                <img src={firstPersonalInfo} alt="Main Profile img" className="personal-profile"/>
                <h1 className="personal-title">Persona 2</h1>
                <img src={secondPersonalInfo} alt="Main Profile img" className="personal-profile"/>
                <h1 className="personal-title">Persona 3</h1>
                <img src={thirdPersonalInfo} alt="Main Profile img" className="personal-profile"/>
            </div>
        </div>
    );
}
export default PersonalProfileViewPage