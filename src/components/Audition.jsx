import React, { useState } from "react"
import { data } from './data.js'

export default function Audition() {

    const [content, setContent] = useState('')

    const handleButtonClick = (buttonNumber) => {
      setContent(data[buttonNumber]);
    };

    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = process.env.PUBLIC_URL + '/Audition.docx';
      link.download = 'Audition.docx';
      link.click();
    };

    return (

    <div>
      <div style={{textAlign: "center"}}>
        <br />
        <h2 style={{color: "#41b4d9"}}>Audition</h2>
        <hr />
        <p>It's your turn</p>
        <br />
      </div>

      <div style={{textAlign: "center"}}>
        <button style={{margin: "0 20px 0 20px", padding: "5px 15px 5px 15px", backgroundColor: "#a4bae0", opacity: "90%"}} onClick={() => handleButtonClick(1)}>오디션 지원 방법</button>
        <button style={{margin: "0 20px 0 20px", padding: "5px 15px 5px 15px", backgroundColor: "#a4bae0", opacity: "90%"}} onClick={() => handleButtonClick(2)}>제출 서류</button>
        <button style={{margin: "0 20px 0 20px", padding: "5px 15px 5px 15px", backgroundColor: "#a4bae0", opacity: "90%"}} onClick={() => handleButtonClick(3)}>오디션 단계</button>
        <button style={{margin: "0 20px 0 20px", padding: "5px 15px 5px 15px", backgroundColor: "#a4bae0", opacity: "90%"}} onClick={() => handleButtonClick(4)}>주의사항</button>
      </div>

      <div>
        <br />
        <br />
        <p style={{textAlign: "left", marginLeft: "30%"}}>{content.text}</p>
        <br />
        <br />
      </div>

      <div style={{textAlign: "center"}}>
        <hr />
        <button style={{cursor: "pointer", padding: "0px 10px 0px 10px"}} onClick={handleDownload}><img src={process.env.PUBLIC_URL + `/download.png`} alt='' width={30} height={30}/></button>
        좌측 오디션 신청서를 다운로드 하세요.
        <br />
        <br />
      </div>
    </div>

    )
}