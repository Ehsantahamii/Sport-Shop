'use client'
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {

    const [slide, setSlide] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/data").then(res => res.json()).then(data => setSlide(data))
    }, []);
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                slidesPerView={1}
                mousewheel={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="headSwiper max-w-[1280px] mx-auto rounded-[25px]"
            >


                {slide.length ? (
                    slide.map((slide) =>
                        <SwiperSlide key={slide.id} >
                            <img className='w-full' src={slide.url} alt={slide.alt} loading='lazy' />
                        </SwiperSlide>)) : (
                    <strong className='mr-9'>در حال دریافت ...</strong>
                )}


            </Swiper>
        </>
    );
}
