import './App.css'
import Cards from './components/Cards/Cards'
import Carousel from './components/Carousel/Carousel'
import Category from './components/Category/Category'
import Facilities from './components/Facilities/Facilities'
import Header from './components/Header/Header'
import Register from './components/Register/Register'
import Rodape from './components/Rodape/Rodape'
import SearchBar from './components/SearchBar/SearchBar'
import { SwiperSlide } from 'swiper/react'
import carousel1 from './assets/BannerCarousel1_1440.svg'
import carousel2 from './assets/BannerCarousel2_1440.svg'
import carousel3 from './assets/BannerCarousel3_1440.svg'

function App() {

  const settings = {
    spaceBetween: 0,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: false
    }
  }

  return (
    <>
      <Header></Header>
      <SearchBar></SearchBar>
      <Carousel settings={settings}>
        <SwiperSlide><img src={carousel1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={carousel2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={carousel3} alt="" /></SwiperSlide>
      </Carousel>
      <Category />
      <Cards />
      <Facilities />
      <Register />
      <Rodape />
    </>
  )
}

export default App
