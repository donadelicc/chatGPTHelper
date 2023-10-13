import Head from 'next/head';
import { useState } from 'react';
// pages
import Main from '../pages/Main'
import Sidebar from '../pages/Sidebar';
// instructions
import { defaultInstructionsArray } from '../defaultInstructions'
import { customInstructionArray } from '../customInstructions';

export default function Home() {
  // default instructions
  const [defaultInstructions] = useState(defaultInstructionsArray)
  const [defaultInstruction] = useState(defaultInstructions[0])
  // Current instruction by selection (default set to the first one)
  const [currentInstruction, setCurrentInstruction] = useState(defaultInstruction)
  // own defined instructions (just static for now)
  const [customInstructions, setCustomInstructions] = useState(customInstructionArray)



  return (
    <>
      <Head>
        <title>ChatGPT Assistant</title>
      </Head>
      
      <div style={{display:"flex"}}>
        <Sidebar defaultInstructionsArray={defaultInstructions} customInstructionsArray={customInstructions} setCurrentInstruction={setCurrentInstruction}/>
        <Main currentInstruction={currentInstruction}/>
      </div>
    </>
  );
}
