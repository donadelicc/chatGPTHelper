import React, { useState } from 'react'
import styles from "../styles/Sidebar.module.css"

// * Responsible for navigating to the default and custom instructions.
// * If logged in, let the user navigate to the "New instructions" page.
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // TODO : Some how get the users custom instructions labels, 
  // TODO : Display the instruction labels below 

  // FUNCTION FOR TOGGLING THE MENU STATE
  const handleMenu = () => {
    // set the state to the opposite
    setIsOpen(prev => !prev)
  }
  if (isOpen){
  // SIDEBAR
  return (
    <div className={styles.container}>
      {/* HEADER */}
      <div className={styles.header}>
        <button className={styles.newInstruction__button}>Create new instruction</button>
        <button className={styles.closeMenu__button} onClick={handleMenu}>close</button>
      </div>

      {/* DEFAULT INSTRUCTIONS */}
      <div className={styles.instructions__container}>
        <h3 className={styles.instruction__label}>default instructions</h3>
        <ul className={styles.instruction__list}>
            {/* TODO:  Create links */}
            <li className={styles.instruction}>Beginner programmer</li>
            <li className={styles.instruction}>Intermediate programmer</li>
            <li className={styles.instruction}>Advanced programmer</li>
        </ul>
      </div>

      {/* CUSTOM INSTRUCTIONS */}
      <div className={styles.instructions__container}>
        {/* Get users name and display id  */}
        <h3 className={styles.instruction__label}>"name"`s custom instructions</h3>
        <ul className={styles.instruction__list}>
            {/* TODO: Create links */}
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
      <div style={{marginTop: 20, marginLeft: 30}}>
        <button className={styles.closeMenu__button} onClick={handleMenu}>open</button>
      </div>
    )
  }
}

export default Sidebar

