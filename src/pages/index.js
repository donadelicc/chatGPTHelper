import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css';
import NavBar from './navbar'; // Angi riktig sti til NavBar-komponenten
import { useAuth } from '../contexts/authDetails'; // Angi riktig sti til AuthContext
// components
import Main from '@/components/Main';
import Sidebar from '../components/Sidebar';
import Link from 'next/link';
import { defaultInstructionsArray } from '@/defaultInstructions';
import { customInstructionArray } from '@/customInstructions';

export default function Home() {
  // default instructions
  const [defaultInstructions] = useState(defaultInstructionsArray)
  const [defaultInstruction] = useState(defaultInstructions[0])

  // ? use the setter for both?
  const [currentInstruction, setCurrentInstruction] = useState(defaultInstruction)
  

  // custom instructions
  const [customInstructions, setCustomInstructions] = useState(customInstructionArray)

  

  return (
    <>
      <Head>
        <title>ChatGPT Assistant</title>
      </Head>

      {/* <NavBar /> */}
      <div style={{display:"flex"}}>
        <Sidebar 
          defaultInstructionsArray={defaultInstructions} 
          customInstructionsArray={customInstructions} 
          setCurrentInstruction={setCurrentInstruction}
        />
        <Main 
          currentInstruction={currentInstruction}
        />
      </div>

      
    </>
  );
}
