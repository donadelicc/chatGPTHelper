import React, { FunctionComponent } from 'react'
import Link from 'next/link'

interface ButtonProps {
    onClick?: () => void;
    label: string
    color: string
    path?: string
}

const CustomButton:FunctionComponent<ButtonProps> = ({path, label, color, onClick}) => {
  return (
    <Link href={path ? path : "#"} onClick={onClick}>
        <button style={{backgroundColor: color}}>{label}</button>
    </Link>
  )
}

export default CustomButton
