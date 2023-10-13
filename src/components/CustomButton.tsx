import React, { FunctionComponent, ReactNode } from 'react'
import Link from 'next/link'
import styles from "../styles/customButton.module.css"
import { IconType } from 'react-icons/lib';
interface ButtonProps {
    onClick?: () => void;
    label: string
    color: string
    path?: string
    Icon?: ReactNode | undefined
}

const CustomButton:FunctionComponent<ButtonProps> = ({path, label, color, onClick, Icon}) => {
  return (
    <Link href={path ? path : "#"} onClick={onClick} style={{textDecoration:"none"}}>
      <button className={styles.button} style={{ backgroundColor: color }}>
        <p style={{margin:0}}>{label}</p>
        {Icon && <span className={styles.icon}>{Icon}</span>}
      </button>
    </Link>
  )
}

export default CustomButton
