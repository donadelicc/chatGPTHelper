import {BsPlus} from "react-icons/bs"
import React, { Dispatch, FunctionComponent, SetStateAction, useEffect, useState } from 'react'
import styles from "../styles/sidebar/Sidebar.module.css"
import {TbLayoutSidebar} from "react-icons/tb"
import Link from 'next/link'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../config/firebase'; // Importer fra din firebase.js fil
import { useAuth } from '../contexts/authDetails'; // Angi riktig sti til AuthContext
import {bgColor, linearGradients} from '../styles/colors'

import CustomButton from "../components/CustomButton"
import Instructions from "../components/sidebar/Instructions"
// * Responsible for navigating to the default and custom instructions.
// * If logged in, let the user navigate to the "New instructions" page.

interface SidebarProps {
  defaultInstructionsArray: {
    header: string;
    instruction: string[];
  }[]

  setCurrentInstruction: Dispatch<SetStateAction<{
    header: string;
    instruction: string[];
  }>>

  customInstructionsArray: {
    header: string;
    instruction: string[];
  }[]
}

const Sidebar:FunctionComponent<SidebarProps> = ({defaultInstructionsArray, customInstructionsArray, setCurrentInstruction}) => {
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
            <button className={styles.newInstruction__button}> 
              <BsPlus size={20}/>
              New Instruction
            </button>
          </Link>

          <button className={`${styles.closeMenu__button} ${!isOpen ? styles.openMenu__button : ''}`} onClick={handleMenu}>
            <TbLayoutSidebar size={20}/>
          </button>
        </div>
        {/* custom component containing list of instructions */}
        
        { defaultInstructions && 
          <Instructions title="the 10 hottest instructions" instructions={defaultInstructions} setCurrentInstruction={setCurrentInstruction} /> }
        { customInstructions && 
          <Instructions title="my custom instructions" instructions={customInstructions} setCurrentInstruction={setCurrentInstruction} /> }

{/* 
        <Instructions title="the 10 hottest instructions" instructions={defaultInstructions} setCurrentInstruction={setCurrentInstruction}/>
        <Instructions title="my custom instructions"instructions={customInstructions} setCurrentInstruction={setCurrentInstruction}/> */}


      </div>

      {/* Footer */}
      <div className={styles.footer}>
        {authUser ? (
          <CustomButton label="Log out" gradient={linearGradients.redLinearGradient} onClick={handleSignOut}/>
          ) : (
          <div style={{display:"flex", flexDirection:"column", gap:"1rem"}}>            
            <CustomButton label="Log in" gradient={linearGradients.greenLinearGradient} path="/auth/signin"/>
            <CustomButton label="sign up" gradient={linearGradients.blueLinearGradient} path="/auth/signup"/>
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
        <div className={styles.tooltipContainer}>
          <span className={styles.tooltipText}>Open sidebar</span>
          <button className={styles.openMenu__button} onClick={handleMenu}>
            <TbLayoutSidebar size={20}/>
          </button>
        </div>
      </div>
    )
  }
}

export default Sidebar

