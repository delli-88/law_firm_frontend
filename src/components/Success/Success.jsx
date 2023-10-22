import React from 'react'
import styles from './Success.module.css'
import CardSuccess from './CardSuccess'

const Success = () => {
  return (
    <div className={styles.successContainer}>
        <div className={styles.successContent}>
            <div>
                <p className={styles.whyP}>Why Choose us?</p>
            </div>
            <div className={styles.cardContainer}>
                <CardSuccess percentage={98}/>
                <CardSuccess percentage={100} style={{ backgroundColor: '#47474780' }}/>
                <CardSuccess percentage={100}/>
            </div>
        </div>
    </div>
  )
}

export default Success