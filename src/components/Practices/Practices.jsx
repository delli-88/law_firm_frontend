import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styles from './Practices.module.css'
import Business1 from '../../assets/Business1.svg'
import Business2 from '../../assets/Business2.svg'
import Elder from '../../assets/Elder.svg'
import Landlord from '../../assets/Landlord.svg'
import Partnership from '../../assets/Partnership.svg'
import RealEstate from '../../assets/RealEstate.svg'

const Practices = () => {
  return (
    <div className={styles.gridContainer}>
        <div className={styles.gridContent}>
            <p className={styles.gridHeading}>Area of Practices</p>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container>
                    <Grid item xs={8}>
                        <div className={styles.imgContainer1}>
                            <img src={Business1} alt="business law" />
                            <div className={styles.textContainer}>
                                <p>BUSINESS LAW</p>
                            </div>
                            </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={styles.imgContainer2}>
                            <img src={Partnership} alt="partnership law" />
                            <div className={styles.textContainer}>
                            <p>PARTNERSHIP LAW</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={styles.imgContainer2}>
                            <img src={RealEstate} alt="real estate law" />
                            <div className={styles.textContainer}>
                            <p>REAL ESTATE LAW</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <div className={styles.imgContainer1}>
                            <img src={Business2} alt="business law" />
                            <div className={styles.textContainer}>
                            <p>BUSINESS LAW</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <div className={styles.imgContainer1}>
                            <img src={Landlord} alt="landlord disputes" />
                            <div className={styles.textContainer}>
                            <p>LANDLORD DISPUTES</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={styles.imgContainer2}>
                            <img src={Elder} alt="elder abuse" />
                            <div className={styles.textContainer}>
                            <p>ELDER ABUSE</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    </div>

  )
}

export default Practices

