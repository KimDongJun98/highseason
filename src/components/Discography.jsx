import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import data from "./Disco.js"

import styles from '../CoverflowSlider.module.css'

import { EffectCoverflow  } from 'swiper/modules';

export default function Discography() {
    return (
        <>
      <Swiper
        className={styles.coverflowSlider}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          // slideShadows: true,
        }}
        modules={[EffectCoverflow]}
      >

        {data.map((slide)=>(      
            <>      
            <SwiperSlide className={styles.slide}>
              <a href={slide.link} target='_blank' rel='noopener noreferrer'>
                <img src={process.env.PUBLIC_URL + `/album_img/${slide.img}`} alt='' />
              </a>
              <h3 className={styles.name}>{slide.name} - {slide.song}</h3>
            </SwiperSlide>
            </>
        ))}

      </Swiper>
    </>
    )
}