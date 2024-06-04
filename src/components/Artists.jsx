import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import data from './Artists_data.js';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from '../Slider.module.css';

import { FreeMode, Pagination } from 'swiper/modules';

const Slider = () => {  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);

  const openModal = (artist) => {
    setSelectedArtist(artist);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArtist(null);
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <Swiper
        className={styles.slider}
        modules={[FreeMode, Pagination]}
        slidesPerView={5}
        spaceBetween={5}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
      >
        {data.map((artist) => (
          <SwiperSlide key={artist.id} className={styles.slide} onClick={() => openModal(artist)}>
            <img src={process.env.PUBLIC_URL + `/img/${artist.img}`} alt={artist.name} />
            {artist.name}
          </SwiperSlide>
        ))}
      </Swiper>

      {isModalOpen && selectedArtist && (
        <div className={styles.modal} onClick={handleModalClick}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={{textAlign: "center"}} className={styles.modalBody}>
              <img className={styles.modalImage} src={process.env.PUBLIC_URL + `/img/${selectedArtist.img}`} alt={selectedArtist.name} />
              <div className={styles.modalInfo}>
                <h2>{selectedArtist.name}</h2>
                <p>{selectedArtist.nickname}</p>
                {selectedArtist.birth && <p>Birth: {selectedArtist.birth}</p>}
                <h3>Albums</h3>
                <Swiper
                  className={styles.innerSlider}
                  modules={[FreeMode, Pagination]}
                  slidesPerView={3}
                  spaceBetween={5}
                  freeMode={true}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                >
                  {selectedArtist.album.map((album, index) => (
                    <SwiperSlide key={index} className={styles.slide}>
                      <img src={process.env.PUBLIC_URL + `/img/${album}`} alt={`${selectedArtist.name} album ${index + 1}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Slider;