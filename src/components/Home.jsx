import YouTube from 'react-youtube'

export default function Home() {

  const playList = ["qBCgXXUU04k", "oLbNTn-OFeQ", "qkPepDKmBSg", 
                    "euo02vhr3h4", "9giLuzHgfe0", "4abtQ3BE1H4"]

  return (
    <>

    <div style={{backgroundColor: "black"}}>

      <div style={{margin: "0%"}}>
        <YouTube    
        videoId={"vTPXbBiOS8A"} //동영상 주소
        opts={{
        width: "100%",
        height: "650px",
        playerVars: {
          autoplay: 1, //자동 재생 여부 
          loop: 1, //반복 재생
          playlist: [playList.map((content)=>(content))] //반복 재생으로 재생할 플레이 리스트
        },
        }}
        onReady={(e) => {
        e.target.unMute();
        }}
        onEnd={(e) => {
          e.target.nextVideo();
        }}
      />

    </div>
  </div>

  </>

  )
}