import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css';
import NavBar from './navbar'; // Angi riktig sti til NavBar-komponenten
import { useAuth } from '../contexts/authDetails'; // Angi riktig sti til AuthContext
// components
import Main from '@/components/Main';
import Sidebar from '../components/Sidebar';
import Link from 'next/link';
import { instructionContents } from '@/defaultInstructions';


export default function Home() {
  const [instructions] = useState(instructionContents)
  const [currentInstruction, setCurrentInstruction] = useState()

  // const [activeDropdown, setActiveDropdown] = useState(null);
  //const { authUser } = useAuth();

  useEffect(() => {
    console.log(currentInstruction)
  }, [currentInstruction])
  

  

  return (
    <>
      <Head>
        <title>ChatGPT Assistant</title>
      </Head>
        <NavBar />
      <div style={{display:"flex"}}>
        <Sidebar defaultInstructions={instructions} setCurrentInstruction={setCurrentInstruction}/>
        
        <Main currentInstruction={currentInstruction}/>
      </div>

      
    </>
  );
}
