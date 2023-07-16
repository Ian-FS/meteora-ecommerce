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
import useMediaQuery from './hooks/useMediaQuery/useMediaQuery'
import carousel1_1440 from './assets/Desktop/Banner-carousel1_1440.svg'
import carousel2_1440 from './assets/Desktop/Banner-carousel2_1440.svg'
import carousel3_1440 from './assets/Desktop/Banner-carousel3_1440.svg'
import carousel1_768 from './assets/Tablet/Banner-carousel1_768.svg'
import carousel2_768 from './assets/Tablet/Banner-carousel2_768.svg'
import carousel3_768 from './assets/Tablet/Banner-carousel3_768.svg'
import carousel1_375 from './assets/Mobile/Banner-carousel1_375.svg'
import carousel2_375 from './assets/Mobile/Banner-carousel2_375.svg'
import carousel3_375 from './assets/Mobile/Banner-carousel3_375.svg'
import { useState } from 'react'
import { listOfProduct } from './Data'


function App() {

  const isMobile = useMediaQuery('(min-width: 280px) and (max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1439px)');
  const isDesktop = useMediaQuery('(min-width: 1440px)');

  const [searchList, setSearchList] = useState('')

  var productFilter
  searchList.toLowerCase()

  if (searchList === '') {
    productFilter = listOfProduct
  } else {
    productFilter = listOfProduct.filter((product) =>
      product.type.toLowerCase() === searchList.toLowerCase())
  }


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
      <Header searchList={searchList} setSearchList={setSearchList} />
      <SearchBar searchList={searchList} setSearchList={setSearchList} />
      <Carousel settings={settings}>
        {isMobile &&
          <>
            <SwiperSlide key={1}><img src={carousel1_375} alt="" /></SwiperSlide>
            <SwiperSlide key={2}><img src={carousel2_375} alt="" /></SwiperSlide>
            <SwiperSlide key={3}><img src={carousel3_375} alt="" /></SwiperSlide>
          </>
        }
        {isTablet &&
          <>
            <SwiperSlide key={4}><img src={carousel1_768} alt="" /></SwiperSlide>
            <SwiperSlide key={5}><img src={carousel2_768} alt="" /></SwiperSlide>
            <SwiperSlide key={6}><img src={carousel3_768} alt="" /></SwiperSlide>
          </>
        }
        {isDesktop &&
          <>
            <SwiperSlide key={7}><img src={carousel1_1440} alt="" /></SwiperSlide>
            <SwiperSlide key={8}><img src={carousel2_1440} alt="" /></SwiperSlide>
            <SwiperSlide key={9}><img src={carousel3_1440} alt="" /></SwiperSlide>
          </>
        }
      </Carousel>
      <Category setSearchList={setSearchList} searchList={searchList} />
      <Cards productFilter={productFilter} />
      <Facilities />
      <Register />
      <Rodape />
    </>
  )
}

export default App
