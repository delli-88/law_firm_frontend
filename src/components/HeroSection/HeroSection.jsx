import React from 'react'
import styles from './HeroSection.module.css'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { ReactComponent as MailIcon} from '../../assets/twotone-mail.svg';
import ImgBackground from '../../assets/imgBackground.svg'
import HeroImage from '../../assets/HeroImage.svg'

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
            <div className={styles.heroContentContainer}>
                <div>
                    <p className={styles.text}>You don't have to <span className={styles.textBold}>Fight them Alone</span></p>
                </div>
                <div>
                    <p className={styles.subText}>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
                </div>
                <div >
                    <Paper
                    className={styles.paper}
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, borderRadius:"5rem" }}
                    >
                        <IconButton sx={{ p: '10px' }} aria-label="email">
                            <MailIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1, color:"#FFFFFF" }}
                            placeholder="Enter your email address"
                            inputProps={{ 'aria-label': 'Enter your email address' }}
                        />
                        <button className={styles.mailBtn}>Let's Talk</button>
                    </Paper>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <img src={ImgBackground} alt="background" className={styles.backgroundImg}/>
                <img src={HeroImage} alt="hero" className={styles.heroImg}/>
            </div>
        </div>
    </div>
  )
}

export default HeroSection