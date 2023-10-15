import React, { FunctionComponent, ReactNode } from 'react'
import styles from '../../styles/search/categoryButton.module.css'

interface CategoryButtonProps {
    label: string
    bgColor: string
    Icon?: ReactNode | undefined
}




const CategoryButton: FunctionComponent<CategoryButtonProps> = ({label, bgColor, Icon})=> {

    // Define the opacity level (0.5 means 50% opacity, you can adjust this)
    const opacity = 0.1;

    // Use rgba to set the background color with opacity
    const backgroundStyle = {
      backgroundColor : `rgba(${parseInt(bgColor.slice(1, 3), 16)}, ${parseInt(bgColor.slice(3, 5), 16)}, ${parseInt(bgColor.slice(5, 7), 16)}, ${opacity})`
    };
  


  return (
    <button className={styles.button}>
      <div className={styles.icon__container} style={backgroundStyle}>
          {Icon && <span className={styles.button__icon} style={{color: bgColor}}>{Icon}</span>}
      </div>
      <div className={styles.text__container}>
          {label}
      </div>
    </button>
  )
}

export default CategoryButton
