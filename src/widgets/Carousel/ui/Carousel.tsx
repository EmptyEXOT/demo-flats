'use client'
import {Swiper, SwiperSlide} from "swiper/react";
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {A11y, Navigation, Pagination, Scrollbar, Autoplay} from "swiper/modules";
import {AppImg} from "@/shared/ui/AppImg";
import Slide1 from './SLIDE_03 1.png'
import Slide2 from './SLIDE_01 1.png'
import Slide3 from './536943-PJIX1A-613 1.png'
import {Box} from "@mui/material";

export const Carousel = () => {
    return (
        <Swiper
            style={{height: '100vh'}}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            autoplay={{delay: 5000}}
            speed={800}
            slidesPerView={1}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide><AppImg isDark={true} src={Slide1} alt={'slide1'}></AppImg></SwiperSlide>
            <SwiperSlide><AppImg isDark={true} src={Slide2} alt={'slide2'} style={{}}></AppImg></SwiperSlide>
            <SwiperSlide><AppImg isDark={true} src={Slide3} alt={'slide3'} style={{}}></AppImg></SwiperSlide>
        </Swiper>
    );
};

