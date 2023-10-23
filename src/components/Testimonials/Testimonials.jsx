import React from 'react'
import styles from './Testimonials.module.css'
import {testimonialsData} from '../../data'
import Card from './Card'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper/modules'
import LeftNavigation from './LeftNavigation'
import RightNavigation from './RightNavigation'
import "swiper/css"

const GenerateCard = (data, idx) => < Card idx={idx} data={data}/>

const Testimonials = () => {

  return (
    <div className={styles.testimonialsContainer}>
        <div className={styles.testimonialsContent}>
          <div className={styles.textContainer}>
            <p>What says our happy Clients</p>
          </div>
          <div className={styles.wrapper}>
              <Swiper style={{padding:"0px 20px"}} initialSlide={0} modules={[Navigation]} slidesPerView={"auto"} spaceBetween={40} allowTouchMove className={styles.swiper}>
                <div className={styles.arrows}>
                  <LeftNavigation />
                  <RightNavigation />
                </div>
                  {
                      testimonialsData.map((item, idx)=>(
                          <SwiperSlide key={idx}>{GenerateCard(item, idx)}</SwiperSlide>
                      ))
                  }
              </Swiper>
          </div>
        </div>
    </div>
  )
}

export default Testimonials