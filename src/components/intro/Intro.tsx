import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import styles from "../../styles/intro/intro.module.css"
import CustomButton from '../CustomButton'
import { linearGradients } from '../../styles/colors'
import {tips} from "../../tips"

const Intro = () => {
  const [isCLosed, setIsClosed] = useState(false)
  const [tipsArray, setTipArray] = useState(tips[0])
  const [index, setIndex] = useState(0)

  let length = tips.length - 1
  let nextIndex = 0

  const handleNextTip = () => {
    // Set the next index
    nextIndex = tips.indexOf(tipsArray) + 1;
    setIndex(nextIndex)
    if (nextIndex <= length){
      // Next tip
      setTipArray(tips[nextIndex])
    } else{
      // close the tip card
      setIsClosed(true)
    }
  
  }

  const handleClose = () => {
    setIsClosed(true)
  }

  return (
    <div className={styles.intro__wrapper} style={{ display: isCLosed ? "none" : "" }}>
      <div className={styles.intro__card} >
      <div>
        <div className={styles.intro__header}>
          <h3 className={styles.intro__title}>
            <span>
              {tipsArray.title} 
            </span> 
            <span className={styles.title__icon}>
            {tipsArray.icon ? tipsArray.icon : ""}
            </span>
           
          </h3>
          <AiOutlineCloseCircle size={25} className={styles.close__icon} onClick={handleClose}/>
        </div>

        <div className={styles.intro__body}>
          <div className={styles.intro__main}>
            {tipsArray.tip}
          </div>
        </div>
      </div>

        <div className={styles.intro__footer}>
          <CustomButton label='continue' gradient={linearGradients.greenLinearGradient} onClick={handleNextTip}/>
          <div>
              <span>{index + 1} / </span>
              <span>{length + 1}</span>
            </div>
        </div>

      </div>
    </div>


  )
}

export default Intro
