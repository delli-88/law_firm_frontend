import {useSwiper} from 'swiper/react'
import styles from './Testimonials.module.css'
import { ReactComponent as RightArrow} from '../../assets/RightArrow.svg'

const RightNavigation = () => {
    const swiper = useSwiper()
    return (
        <div className={styles.rightNavigation}>
            <RightArrow onClick={()=> swiper.slideNext()}/>
        </div>
    )
}

export default RightNavigation