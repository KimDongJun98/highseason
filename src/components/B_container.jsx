import instagram from '../instagram.png';
import facebook from '../facebook.png';
import youtube from '../youtube.png';

export default function B_container() {

    return (

        <>
        <div className='bottom_image' style={{backgroundColor: "black"}}>            

            <br />

            <a href="https://www.instagram.com/highseason.official" 
                target="_blank"
                rel='noopener noreferrer'
                style={{margin: 10}}>
                <img src={instagram} alt="instagram" width={25} height={25}/>
            </a>

            <a href="https://www.facebook.com/highseAson.offical/" 
                target="_blank"
                rel='noopener noreferrer'
                style={{margin: 10}}>
                <img src={facebook} alt="facebook" width={25} height={25}/>
            </a>

            <a href="https://www.youtube.com/channel/UCh1NhjdgB3Uh0UbgdcWs3-Q" 
                target="_blank"
                rel='noopener noreferrer'
                style={{margin: 10}}>
                <img src={youtube} alt="youtube" width={25} height={25}/>
            </a>

            <br />
            <br />
  
        </div>


        <div className='bottom_Text'>
            서울특별시 강남구 논현로 153길 24 B1 / 24, Nonhyeon-ro 153-gil, Gangnam-gu, Seoul, Republic of Korea. <br />            
            Fax 02.6080.0701 / 공연관련 및 섭외 문의 E-mail. high-season@naver.com <br />
            © 2022 by high seAson Creative Group. ALL RIGHTS RESERVED.

            <br />
            <br />
        </div>    

        </>
    )

}