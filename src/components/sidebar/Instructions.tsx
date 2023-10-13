import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'
import styles from '../../styles/sidebar/Instructions.module.css'
import { BsCodeSquare } from 'react-icons/bs'

interface InstructionProps {
  instructions: Array<{
    header: string;
    instruction: string[]
  }>
  title: string
  setCurrentInstruction?: Dispatch<SetStateAction<{
    header: string;
    instruction: string[];
  }>>;
}


const Instructions: FunctionComponent<InstructionProps> = ({instructions, setCurrentInstruction, title}) => {

  const handleInstructionClick = (instruction: {header: string, instruction: string[]}) => {
    // passing the current clicked instruction to the state in root file (index.js)
    if(setCurrentInstruction){
      setCurrentInstruction(instruction)
    }
  }
  

  return (
    <div className={styles.instructions__container}>
      <h3 className={styles.instruction__label}>{title}</h3>

      <ul className={styles.instruction__list}>
       {/* Looping trough the array of default instructions  */}
       {instructions.map((instruction, index) => (

        <li className={styles.instruction} key={index}>
          <button className={styles.instructionButton} onClick={() => handleInstructionClick(instruction)} >
            <div style={{display:"flex", gap: "10px", alignItems:"center"}}>
              <BsCodeSquare />
              <span>{instruction.header.slice(0,20)}{instruction.header.length < 21 ? "": "..."}</span>
            </div>
          </button>
        </li>

         ))}

     </ul>
   </div>
  )
}

export default Instructions
