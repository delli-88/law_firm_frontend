import React from 'react'
import styles from './Team.module.css'
import { Grid } from '@mui/material'
import { teamData } from '../../data'

const Team = () => {
  return (
    <div className={styles.teamContainer}>
        <div className={styles.teamContent}>
            <p className={styles.teamHeading}>Our Team</p>
            <div className={styles.members}>
                <Grid container spacing={2}>
                    {
                        teamData.map((data)=>(
                        <Grid item xs={4}>
                            <div className={data.name==="Sanfole"?`${styles.card} ${styles.special}`:`${styles.card}`}>
                                <img src={data.image} alt={data.name} />
                                <div className={styles.cardText}>
                                    <p className={styles.cardHeading}>{data.name}</p>
                                    <p className={styles.cardDesc}>{data.cases} Cases</p>
                                </div>
                            </div>
                        </Grid>
                        ))
                    }
                </Grid>
            </div>
        </div>
    </div>
  )
}

export default Team