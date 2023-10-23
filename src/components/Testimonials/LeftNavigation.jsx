import {useSwiper} from 'swiper/react'
import styles from './Testimonials.module.css'
import { ReactComponent as LeftArrow} from '../../assets/LeftArrow.svg'

const LeftNavigation = () => {
    const swiper = useSwiper()
    return (
        <div className={styles.leftNavigation}>
            <LeftArrow onClick={()=> swiper.slidePrev()}/>
        </div>
    )
}

export default LeftNavigation