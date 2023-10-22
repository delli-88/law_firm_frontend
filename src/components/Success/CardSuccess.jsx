import React from 'react'
import styles from './CardSuccess.module.css'
import Gift from '../../assets/Gift.svg'
import Ellipse from '../../assets/Ellipse.svg'

const CardSuccess = ({percentage, style}) => {
  return (
    <div className={styles.card} style={style}>
        <div className={styles.imgContainer}>
            <img src={Ellipse} alt="ellipse" className={styles.ellipse}/>
            <img src={Gift} alt="gift" className={styles.gift}/>
        </div>
        <p className={styles.percent}>{percentage}% Success Rate</p>
        <p className={styles.cardP}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p>
        <button className={styles.btn}>Read More</button>
    </div>
  )
}

export default CardSuccess