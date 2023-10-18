import React, {FunctionComponent, useState} from 'react'
import styles from "../styles/Home.module.css"
import { useAuth } from '../contexts/authDetails'; // Angi riktig sti til AuthContext
import Link from 'next/link'
// Copy to clipboard library from react
import {CopyToClipboard} from 'react-copy-to-clipboard';
// custom color schema
import { bgColor, linearGradients } from '../styles/colors';
// Icons
import {FaClipboardList} from "react-icons/fa"
import {BsCheck2All} from "react-icons/bs"
import {LiaSearchSolid} from "react-icons/lia"
import {AiOutlinePlus} from "react-icons/ai"
// components
import CustomButton from '../components/CustomButton';
import FirestoreDataDisplay from '../components/data/fireStoreDisplay';


interface MainProps{
  currentInstruction: {
  name: string;
  instruction: string[];
  };
}


const Main: FunctionComponent<MainProps> = ({currentInstruction}) => {

    const { authUser } = useAuth();
    //const [activeDropdown, setActiveDropdown] = useState(null);
    const[copied, setCopied] = useState(false)

    let header = ""
    let instructions: string[] = []

    if(currentInstruction){
      header = currentInstruction.name
      instructions = currentInstruction.instruction
      
      console.log(header); // --> undefined
      console.log(instructions);
      console.log(currentInstruction);

    }
// test
  return (
    <main className={styles.main}>

       <div className={styles.introduction}>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <h1 className={styles.title}>Tailored ChatGPT Instructions</h1>
          <CustomButton label='brows' color={bgColor.red} Icon={<LiaSearchSolid />} gradient={linearGradients.greenLinearGradient}/>
        </div>
          <div className={styles.introductionContainer}>
            <p className={styles.description}>
              This platform provides you with a set of custom instructions that you can use to enhance your experience with ChatGPT. Navigate through different sets of instructions in the menu. You can copy these instructions and paste them into your ChatGPT custom instructions field to guide the AI in generating more tailored responses.
            </p>
          </div>
        </div>

      {authUser ? (
        <>
        <div className={styles.createInstructionContainer}>
          <p className={styles.customInstructionTxt}>Click here to create your own instructions</p>
          <CustomButton  label='Create Instruction' path='links/createInstruction' color={bgColor.green} Icon={<AiOutlinePlus />} gradient={linearGradients.greenLinearGradient}/>
      </div>
      </>

      ) : (
       <div className={styles.notLoggedInSection}>
         <p>Please remember to 
              <span>
                <Link href="/auth/signin" className={styles.loginShortcut} style={{color: bgColor.green}}>log in</Link> 
              </span>
              to fully enjoy the benefits. Once logged in, you&apos;ll have the option to create your very own custom instructions for ChatGPT.
            </p>
       </div>
      )}

      <div className={styles.instruction__container}>
        <div className={styles.instruction__header}>
        <h3 className={styles.instruction_title}>{currentInstruction?.name}</h3>
          {/* Library lets us copy the text */}
          <CopyToClipboard 
            
            text={instructions.join(';')}
          >
            <div onClick={() => setCopied(true)} style={{display: "flex", justifyContent:"center", alignItems:"center", gap:"10px"}}>
            { copied ? (
                <>
                <BsCheck2All size={20}/>
              </>
            ): (
              <>
                <FaClipboardList size={20}/>
              </>
            )}
            <span className={styles.copyToClipboard__text}>{copied ? "copied!" : "copy instruction"}</span>
            </div>
          </CopyToClipboard>
        </div>
          <div className={styles.instruction__list}>
            {/* Consider using a unique identifier (instence key from firestore?) from your data as the key instead. */}
            {Array.isArray(currentInstruction?.instruction) && currentInstruction?.instruction.map((instruction, index) =>(
            <li className={styles.instruction__item} key={index}>{instruction}</li>
            ))}
          </div>
        </div>

            <h1>Global Instructions from Database</h1>
            <FirestoreDataDisplay />

      </main>

  
  )
}

export default Main