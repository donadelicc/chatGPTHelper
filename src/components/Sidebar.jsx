import React, { useState } from 'react'
import styles from "../styles/Sidebar.module.css"
import {TbLayoutSidebar} from "react-icons/tb"
import Link from 'next/link'
// * Responsible for navigating to the default and custom instructions.
// * If logged in, let the user navigate to the "New instructions" page.
const Sidebar = ({defaultInstructions, setCurrentInstruction}) => {
  
  const [instructions, setInstructions] = useState(defaultInstructions)
  const [isOpen, setIsOpen] = useState(true)

  // useEffect(() =>{
  //   setInstructions(array)
  // }, [])

  // TODO : Some how get the users custom instructions labels, 
  // TODO : Display the instruction labels below 

  const handleInstructionClick = (instruction) => {
    // passing the current clicked instruction to the state in root file (index.js)
    setCurrentInstruction(instruction)
  }

  // FUNCTION FOR TOGGLING THE MENU STATE
  const handleMenu = () => {
    // set the state to the opposite
    setIsOpen(prev => !prev)
    console.table(instructions)
  }
  if (isOpen){
  // SIDEBAR
  return (
    <div className={styles.container}>
      {/* HEADER */}
      <div className={styles.header}>
      <Link href="/createInstruction" legacyBehavior>
        <button className={styles.newInstruction__button}>Create new instruction</button>
        </Link>
        <button className={`${styles.closeMenu__button} ${!isOpen ? styles.openMenu__button : ''}`} onClick={handleMenu}>
        <TbLayoutSidebar size={20}/>
        </button>
      </div>

      {/* DEFAULT INSTRUCTIONS */}
      <div className={styles.instructions__container}>
        <h3 className={styles.instruction__label}>default instructions</h3>
        <ul className={styles.instruction__list}>

          {/* Looping trough the array of default instructions  */}
          {instructions.map((instruction, index) => (
            <li className={styles.instruction} key={index}>
              <button 
                onClick={() => handleInstructionClick(instruction)}
                className={styles.instructionButton}
                >
                {instruction.header}
              </button>
            </li>
            ))}

        </ul>
      </div>

      {/* CUSTOM INSTRUCTIONS */}
      <div className={styles.instructions__container}>
        <h3 className={styles.instruction__label}>my custom instructions</h3>
        <ul className={styles.instruction__list}>
            {/* TODO: Dynamically get users custom instructions */}
            <li className={styles.instruction}>CV creator</li>
            <li className={styles.instruction}>Rhythmic help</li>
            <li className={styles.instruction}>Formal Messages</li>
        </ul>
      </div>
    </div>
  )
  }
  else{
    return(
      // CLOSE BUTTON
      <div style={{marginTop: 20, marginLeft: 10}}>
        <button className={styles.openMenu__button} onClick={handleMenu}><TbLayoutSidebar size={20}/></button> 
      </div>
    )
  }
}

export default Sidebar

