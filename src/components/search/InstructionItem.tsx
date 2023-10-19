import React, { ReactNode } from 'react'
import styles from '../../styles/search/instructionItem.module.css'


interface InstructionProps {
    header: string;
    instruction: string[];
}

export const bgColor = {
  green: "#12b981",
  blue: "#00BAFF",
  red: "#FF2519",
  orange: "#f7b759"
}


const InstructionItem: React.FunctionComponent<InstructionProps> = ({header}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{header}</h3>
    </div>
  )
}

export default InstructionItem
