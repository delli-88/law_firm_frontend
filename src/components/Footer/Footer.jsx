import React from 'react'
import styles from './Footer.module.css'
import logoImg from '../../assets/logo.svg'
import Insta from '../../assets/Insta.svg'
import Fb from '../../assets/Fb.svg'
import Twitter from '../../assets/Twitter.svg'
import Pinterest from '../../assets/Pinterest.svg'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
            <div className={styles.footerWrapper}>
                <div className={styles.logo}>
                    <img src={logoImg} alt="logo" />
                    <p>IGSTUDIO</p>
                </div>
                <div className={styles.footerLinks}>
                    <button>Home</button>
                    <button>Attorneys</button>
                    <button>Practice Areas </button>
                    <button>About Us</button>
                </div>
                <div className={styles.footerImgs}>
                    <img src={Insta} alt="insta" />
                    <img src={Fb} alt="facebook" />
                    <img src={Twitter} alt="twitter" />
                    <img src={Pinterest} alt="pinterest" />
                </div>  

            </div>
            <div className={styles.footerCopyRights}>
                <div className={styles.footerCopyRightsWrapper}>
                    <button>© 2020 Acme. All right reserved.</button>
                    <button>Privacy Policy</button>
                    <button>Terms of Service</button>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Footer