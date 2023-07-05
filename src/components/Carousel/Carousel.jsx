/* eslint-disable react/prop-types */
import { Swiper } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Carousel.scss'


export default function Carousel({ settings, children }) {
    return (
        <div>
            <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>{children}</Swiper>
        </div>
    )
}

