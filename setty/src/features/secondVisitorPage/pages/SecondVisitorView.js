import React from 'react';
import './second-visitor-page.css';
import UiIntroPageMainContaintForm from '../components/UIIntroPageMainContaintForm';
import ImgCarousel from '../components/Carousel';
import UiPageImage from '../components/ImageComponents';

const SecondView = () =>{
    //00 main img
    const mainImg ="https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty-second-page/ui_1.png";
    // 01 ui img data 
    const firstSectionCarousel = "https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty-second-page/ui_1.png";
    // 02 ui img data
    const secondSectionCarousel = [
        {
            src:"https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty-second-page/ui_2.png", 
            alt:"second img section-1"
        },
        {
            src:"https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty-second-page/ui_3.png", 
            alt:"second img section-2"
        },
        {
            src:"https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty-second-page/ui_4.png", 
            alt:"second img section-3"
        },
        
    ];
    // 03 ui img data
    const thirdSectionCarousel =[
        {
            src:"https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty-second-page/ui_5.png", 
            alt:"third img section-1"
        },
        {
            src:"https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty-second-page/ui_6.png", 
            alt:"third img section-2"
        },
        {
            src:"https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty-second-page/ui_7.png", 
            alt:"third img section-3"
        },
        {
            src:"https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty-second-page/ui_8.png", 
            alt:"third img section-4"
        },
        {
            src:"https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty-second-page/ui_9.png", 
            alt:"third img section-5"
        },
        {
            src:"https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty-second-page/ui_10.png", 
            alt:"third img section-6"
        }
    ]
    // 04 ui img data
    const fourSectionCarousel =[
        {
            src:"https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty-second-page/ui_14.png", 
            alt:"four img section-4"
        },
        {
            src:"https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty-second-page/ui_12.png", 
            alt:"four img section-2"
        },
        {
            src:"https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty-second-page/ui_13.png", 
            alt:"four img section-3"
        },
        {
            src:"https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/setty-second-page/ui_11.png", 
            alt:"four img section-1"
        },
    ]
    return(
        <div className='ui-design-components'>
            <UiPageImage imgData={mainImg}/>
            <h3 className='ui-design-components-title'>UI Flow & Design</h3>
            <UiIntroPageMainContaintForm titleNumber={"01"} titleText={"AI 어시스턴트 Setty와의 교류"} showMusicIcon={true} showTouchIcon={false}/>
            <UiPageImage imgData={firstSectionCarousel}/>
            <UiIntroPageMainContaintForm titleNumber={"02"} titleText={"AI가 분석한 아티스트의 공연"}  showMusicIcon={true} showTouchIcon={true}/>
            <ImgCarousel imgData={secondSectionCarousel} />
            <UiIntroPageMainContaintForm titleNumber={"03"} titleText={"새로운 공연을 위한 기획"} showMusicIcon={true} showTouchIcon={true}/>
            <ImgCarousel imgData={thirdSectionCarousel} />
            <UiIntroPageMainContaintForm titleNumber={"04"} titleText={"창의적인 무대 생성"} showMusicIcon={true} showTouchIcon={true}/>
            <ImgCarousel imgData={fourSectionCarousel} />
        </div>
    );
}

export default SecondView;