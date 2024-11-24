import "./globalCSSStyling.css";

function ScrollToTop() {
    const TopButtonImg ="https://setty-hongik-2024.s3.ap-northeast-2.amazonaws.com/top_button_icon.png";
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="top-btn-container">
        <button
          className="top-btn"
          onClick={handleTop} // 버튼 클릭시 함수 호출
        >
          <img
            src={TopButtonImg}
            alt="탑버튼 아이콘"
            style={{ width: "3vw", height: "5vh", color:"black"}}
          />
        </button>
      </div>
    </>
  );
}

export default ScrollToTop;