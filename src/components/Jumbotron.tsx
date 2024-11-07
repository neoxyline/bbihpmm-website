import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import coding from "../assets/images/jumbotron/coding.jpg"
import coding2 from "../assets/images/jumbotron/coding-2.jpg"

export default function Jumbotron(){
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="h-96 max-w-6xl rounded-sm"
            >
                <SwiperSlide>
                    <img 
                        src={coding} 
                        alt='coding'
                        className='m-auto h-96 object-contain'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        src={coding2} 
                        alt='coding-2'
                        className='m-auto h-96 object-cover'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}