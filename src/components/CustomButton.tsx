import React, { FunctionComponent, ReactNode } from 'react'
import Link from 'next/link'
import styles from "../styles/customButton.module.css"
import { linearGradients } from '../styles/colors'


interface ButtonProps {
    onClick?: () => void;
    label: string
    color?: string
    path?: string
    Icon?: ReactNode | undefined
    gradient?: string

}

const CustomButton:FunctionComponent<ButtonProps> = ({path, label, color, onClick, Icon, gradient}) => {
  return (
    <Link href={path ? path : "#"} onClick={onClick} style={{textDecoration:"none", background: gradient}} className={styles.button}>
      <p style={{margin:0}}>{label}</p>
      {Icon && <span className={styles.icon}>{Icon}</span>}
    </Link>
  )
}

export default CustomButton
