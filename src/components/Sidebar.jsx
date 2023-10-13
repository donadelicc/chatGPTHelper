import {BsCodeSquare} from "react-icons/bs"
import React, { useState } from 'react'
import styles from "../styles/Sidebar.module.css"
import {TbLayoutSidebar} from "react-icons/tb"
import Link from 'next/link'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../config/firebase'; // Importer fra din firebase.js fil
import { useAuth } from '../contexts/authDetails'; // Angi riktig sti til AuthContext
import {logInColor, logOutColor, signUpColor} from '../styles/colors'

import CustomButton from "../components/CustomButton"
// * Responsible for navigating to the default and custom instructions.
// * If logged in, let the user navigate to the "New instructions" page.
const Sidebar = ({defaultInstructionsArray, customInstructionsArray, setCurrentInstruction}) => {
  const { authUser } = useAuth();
  const [defaultInstructions] = useState(defaultInstructionsArray)
  const [customInstructions] = useState(customInstructionsArray)

  const [isOpen, setIsOpen] = useState(true)
  // TODO : Some how get the users custom instructions labels, 
  // TODO : Display the instruction labels below 


const handleSignOut = () => {
  signOut(auth).then(() => {
    console.log("Sign-out successful.");
  }).catch((error) => {
    console.log(error);
  });
  };


  const handleInstructionClick = (instruction) => {
    // passing the current clicked instruction to the state in root file (index.js)
    setCurrentInstruction(instruction)
  }

  // FUNCTION FOR TOGGLING THE MENU STATE
  const handleMenu = () => {
    // set the state to the opposite
    setIsOpen(prev => !prev)
  }
  if (isOpen){
  // SIDEBAR
  return (
    <div className={styles.container}>
      <div>
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
            {defaultInstructions.map((instruction, index) => (
              <li className={styles.instruction} key={index}>
                <button 
                  onClick={() => handleInstructionClick(instruction)}
                  className={styles.instructionButton}
                  >
                    <div style={{display:"flex", gap: "10px", alignItems:"center"}}>
                      <BsCodeSquare />
                      <span>{instruction.header}</span>
                    </div>

                </button>
              </li>
              ))}

          </ul>
        </div>

        {/* CUSTOM INSTRUCTIONS */}
        <div className={styles.instructions__container}>
          <h3 className={styles.instruction__label}>my custom instructions</h3>
          <ul className={styles.instruction__list}>

            {/* Looping trough the array of default instructions  */}
            {customInstructions.map((instruction, index) => (
              <li className={styles.instruction} key={index}>
                <button 
                  onClick={() => handleInstructionClick(instruction)}
                  className={styles.instructionButton}
                  >
                  <div style={{display:"flex", gap: "10px", alignItems:"center"}}>
                    <BsCodeSquare/>
                    <span>{instruction.header}</span>
                  </div>
                </button>
              </li>
              ))}
          </ul>
        </div>
      </div>

      <div className={styles.footer}>
        {authUser ? (
          <CustomButton label="Log out" color={logOutColor.color} onClick={handleSignOut}/>
          ) : (
          <div style={{display:"flex", gap:"20px"}}>            
            <CustomButton label="Log in" color={logInColor.color} path="/logIn"/>
            <CustomButton label="sign up" color={signUpColor.color} path="signUp"/>
          </div>

        )}

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

