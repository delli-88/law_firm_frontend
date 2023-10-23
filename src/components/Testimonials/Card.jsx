import React from 'react'
import styles from './Card.module.css'

const Card = ({idx,data}) => {
  console.log(idx)
  return (
    <div className={styles.card} style={idx%2===0?{}:{ backgroundColor: '#47474780' }}>
        <img src={data.image} alt={data.name} />
        <p className={styles.name}>{data.name}</p>
        <p className={styles.desig}>{data.designation}</p>
        <p className={styles.review}>{data.review}</p>
    </div>
  )
}

export default Card