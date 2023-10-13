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
    <Link href={path ? path : "#"} onClick={onClick} style={{textDecoration:"none"}}>
      <button className={styles.button} style={{ background: gradient }}>
        <p style={{margin:0}}>{label}</p>
        {Icon && <span className={styles.icon}>{Icon}</span>}
      </button>
    </Link>
  )
}

export default CustomButton
