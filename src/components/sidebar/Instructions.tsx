import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'
import styles from '../../styles/sidebar/Instructions.module.css'
import { BsCodeSquare } from 'react-icons/bs'
import {DataItem} from '../../hooks/useFirestoreData'



interface InstructionProps {
  instructions: DataItem[];  // This the the type of the data from Firestore Database
  title: string;
  setCurrentInstruction?: Dispatch<SetStateAction<DataItem>>;
}

const Instructions: FunctionComponent<InstructionProps> = ({instructions, title, setCurrentInstruction}) => {
  
  console.log(instructions); // This is the data from Firestore Database
  
  const handleInstructionClick = (instruction: DataItem) => {
    if(setCurrentInstruction){
      setCurrentInstruction(instruction)
    }
  }


  return (
    <div className={styles.instructions__container}>
      <h3 className={styles.instruction__label}>{title}</h3>

      <ul className={styles.instruction__list}>
       {instructions.map((instruction, index) => (
        <li className={styles.instruction} key={index}>   {/* Consider using a unique identifier (instence key from firestore?) from your data as the key instead. */}
          <button className={styles.instructionButton} onClick={() => handleInstructionClick(instruction)}>
            <div style={{display:"flex", gap: "10px", alignItems:"center"}}>
              <BsCodeSquare />
              <span>{instruction.name.slice(0,20)}{instruction.name.length < 21 ? "" : "..."}</span>
            </div>
          </button>
        </li>
      ))}

     </ul>
   </div>
  )
}

export default Instructions
