import React from 'react';
import './second-visitor-page.css';
import UiIntroPageMainContaintForm from '../components/UIIntroPageMainContaintForm';
import UiPageImage from '../components/ImageComponents';

const SecondView = () =>{
    // 01 ui img data 
    const firstComponentImg = "https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty-second-page/ui_1.png";
    // 02 ui img data
    const secondComponentImg = "https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty-second-page/ui_2.png";
    const secondComponentImg2 = "https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty-second-page/ui_3.png";
    const secondComponentImg3 = "https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty-second-page/ui_4.png";
    // 03 ui img data
    const thirdComponentImg = "https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty-second-page/ui_5.png";
    const thirdComponentImg2 = "https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty-second-page/ui_6.png";
    const thirdComponentImg3 = "https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty-second-page/ui_7.png";
    const thirdComponentImg4 = "https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty-second-page/ui_8.png";
    const thirdComponentImg5 = "https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty-second-page/ui_9.png";
    const thirdComponentImg6 = "https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty-second-page/ui_10.png";
    // 04 ui img data

    return(
        <div className='ui-design-components'>
            <h3 className='ui-design-components-title'>UI Flow & Design</h3>
            <UiIntroPageMainContaintForm titleNumber={"01"} titleText={"AI 어시스턴트 Setty와의 교류"} imgData={firstComponentImg} showMusicIcon={true} showTouchIcon={false}/>
            <UiIntroPageMainContaintForm titleNumber={"02"} titleText={"AI가 분석한 아티스트의 공연"}  imgData={secondComponentImg} showMusicIcon={true} showTouchIcon={true}/>
            <UiPageImage imgData={secondComponentImg2} />
            <UiPageImage imgData={secondComponentImg3} />
            <UiIntroPageMainContaintForm titleNumber={"03"} titleText={"새로운 공연을 위한 기획"} imgData={thirdComponentImg} showMusicIcon={true} showTouchIcon={true}/>
            <UiPageImage imgData={thirdComponentImg2} />
            <UiPageImage imgData={thirdComponentImg3} />
            <UiPageImage imgData={thirdComponentImg4} />
            <UiPageImage imgData={thirdComponentImg5} />
            <UiPageImage imgData={thirdComponentImg6} />
            <UiIntroPageMainContaintForm titleNumber={"04"} titleText={"창의적인 무대 생성"} imgData={thirdComponentImg} showMusicIcon={true} showTouchIcon={true}/>
        </div>
    );
}

export default SecondView;