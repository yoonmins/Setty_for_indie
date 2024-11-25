import React,{ useRef } from 'react';
import './second-visitor-page.css';
import UiIntroPageMainContaintForm from '../components/UIIntroPageMainContaintForm';
import ImgCarousel from '../components/Carousel';
import UiPageImage from '../components/ImageComponents';
import SettyGIFComponents from '../components/SettyGif';
import InfomationIntroduceViewPage from '../../mainVisitorPage/components/InfoIntroView';
import ScrollToComponents from '../../../globalComponents/ScrollToComponents';

const SecondView = () =>{
    // Section별로 참조를 위한 useRef 생성
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);
    const section6Ref = useRef(null);
    const section7Ref = useRef(null);

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    //final Result Page
    const firstSettyView ="https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/finalImg/img_1.png";
    const secondSettyView ="https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/finalImg/img_2.png";
    const thirdSettyView ="https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/finalImg/img_3.png";
    const fourSettyView ="https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/finalImg/img_4.png";
    const fiveSettyView ="https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/finalImg/img_5.png";
    const sixSettyView ="https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/finalImg/img_6.png";
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
        <div>
            <div className='ui-design-components'>
                {/* final result 메인페이지 정보 가져옴 */}
                <div ref={section1Ref}>
                    <UiPageImage imgData={firstSettyView}/>
                </div>
                <div ref={section2Ref} className='ui-page-img-components'>
                <UiPageImage imgData={secondSettyView}/>
                </div>
                <div ref={section3Ref} className='ui-page-img-components'>
                <UiPageImage imgData={thirdSettyView}/>
                </div>
                <div ref={section4Ref} className='ui-page-img-components'>
                    <UiPageImage imgData={fourSettyView}/>
                </div>
                <div ref={section5Ref} className='ui-page-img-components'>
                    {/* <UiPageImage imgData={fiveSettyView}/> */}
                    <div className='GIF-title-info'>
                        <h3 className='ui-design-components-title'>AI Bot</h3>
                        <UiIntroPageMainContaintForm titleNumber={""} titleText={"AI 어시스턴트 Setty와의 교류"}  showMusicIcon={true} showTouchIcon={false}/>
                    </div>
                    <SettyGIFComponents />
                </div>
                <div ref={section6Ref} className='ui-page-img-components'>
                <UiPageImage imgData={sixSettyView}/>  
                </div>          
                {/* <UiIntroPageMainContaintForm titleNumber={"01"} titleText={"AI 어시스턴트 Setty와의 교류"} showMusicIcon={true} showTouchIcon={false}/>
                <UiPageImage imgData={firstSectionCarousel}/> */}
                <div ref={section7Ref}>
                    <UiIntroPageMainContaintForm titleNumber={"01"} titleText={"AI가 분석한 아티스트의 공연"}  showMusicIcon={true} showTouchIcon={true}/>
                    <ImgCarousel imgData={secondSectionCarousel} />
                </div>
                <UiIntroPageMainContaintForm titleNumber={"02"} titleText={"새로운 공연을 위한 기획"} showMusicIcon={true} showTouchIcon={true}/>
                <ImgCarousel imgData={thirdSectionCarousel} />
                <UiIntroPageMainContaintForm titleNumber={"03"} titleText={"창의적인 무대 생성"} showMusicIcon={true} showTouchIcon={true}/>
                <ImgCarousel imgData={fourSectionCarousel} />
            </div>
            <div className='ref-components'>
                <button className="ref-components-button" onClick={() => scrollToSection(section1Ref)}></button>
                <button className="ref-components-button" onClick={() => scrollToSection(section2Ref)}></button>
                <button className="ref-components-button" onClick={() => scrollToSection(section3Ref)}></button>
                <button className="ref-components-button" onClick={() => scrollToSection(section4Ref)}></button>
                <button className="ref-components-button" onClick={() => scrollToSection(section5Ref)}></button>
                <button className="ref-components-button" onClick={() => scrollToSection(section6Ref)}></button>
                <button className="ref-components-button" onClick={() => scrollToSection(section7Ref)}></button>
            </div>
        </div>
    );
}

export default SecondView;