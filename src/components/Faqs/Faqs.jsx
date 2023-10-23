import React from 'react'
import styles from './Faqs.module.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {faqsData} from '../../data'

const Faqs = () => {
  return (
    <div className={styles.faqsContainer}>
        <div className={styles.faqsContent}>
            <p className={styles.faqsHeader}>FAQ</p>
            <div className={styles.faqBox}>
                <div className={styles.faqBoxSubHead}>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                </div>  
                <div className={styles.faqBoxWrapper}>
                    <div className={styles.accordionContainer}>
                    {
                        faqsData.map((faq, idx)=>(
                            <Accordion className={styles.accordionWrapper} key={idx+1}>
                                <AccordionSummary
                                expandIcon={<button>+</button>}
                                aria-controls={`panel${idx+1}a-content`}
                                id={`panel${idx+1}a-content`}
                                className={styles.accordionSummary}
                                >
                                    <Typography>{faq.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails className={styles.accordionDetails}>
                                    <Typography>{faq.answer}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faqs