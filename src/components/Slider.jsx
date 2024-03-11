// import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../src/index.css";

import { EffectFade, Navigation, Pagination } from "swiper/modules";

export default function Slider() {
    const images = [
        "https://swiperjs.com/demos/images/nature-1.jpg",
        "https://swiperjs.com/demos/images/nature-2.jpg",
        "https://swiperjs.com/demos/images/nature-3.jpg",
        "https://swiperjs.com/demos/images/nature-4.jpg",
    ];
    return (
        <div>
            <Swiper
                slidesPerView={3}
                observer
                spaceBetween={30}
                effect={"fade"}
                navigation
                scrollbar={{ draggable: false }}
                pagination={{
                    clickable: true,
                    slidesPerView: 5,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="max-w-[400px]"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative">
                            <img src={image} alt={`Nature ${index + 1}`} />
                            {/* Icon ở góc phải */}
                            <div className="absolute top-5 right-5 hover:scale-105">
                                <div className="w-4 h-4 ">
                                    {/* <FaRegHeart className="  fill-green-500" /> */}
                                    <FaHeart className="  fill-green-500 stroke-white" />
                                </div>
                            </div>
                            <div className="absolute top-5 left-5 hover:scale-105">
                                <div className="w-4 h-4 ">
                                    {/* <FaRegHeart className="  fill-green-500" /> */}
                                    <FaHeart className="  fill-green-500 stroke-white" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
