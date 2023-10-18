import Head from 'next/head';
import { useAuth } from '../contexts/authDetails';
import { useState } from 'react';
// pages
import Main from '../pages/Main'
import Sidebar from '../pages/Sidebar';

// components
import Intro from "../components/intro/Intro"
import { DataItem } from '../hooks/useFirestoreData';

//tes

export default function Home() {

  const { authUser } = useAuth();
  console.log(useState(null));
  const [currentInstruction, setCurrentInstruction] = useState(null);
  


 
  
  return (
    <>
      <Head>
        <title>ChatGPT Assistant</title>
      </Head>
      
      {/* INTRO */}
      { authUser ? (
        <></>
        ) : (
          <Intro />
          )}

      <div style={{display:"flex"}}>
        <Sidebar setCurrentInstruction={setCurrentInstruction}/>
        <Main currentInstruction={currentInstruction}/>
      </div>
    </>
  );
}
