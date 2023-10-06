import React, { useState } from 'react';
import Head from 'next/head';
import NavBar from './navbar'; // Angi riktig sti til NavBar-komponenten
import styles from '@/styles/CreateInstruction.module.css'; // Opprett denne CSS-modulen

const defaultInstructionValue = `*
*
*
*
*`

export default function CreateInstruction() {
  const [instructionType, setInstructionType] = useState('');
  const [instructionContent, setInstructionContent] = useState(defaultInstructionValue);

  const handleSubmit = () => {
    // Her kan du legge til kode for å lagre instruksjonen, for eksempel i en database
    console.log(`Type: ${instructionType}, Content: ${instructionContent}`);
  };

  return (
    <>
      <Head>
        <title>Create Instruction</title>
      </Head>
      <NavBar />
      <div className={styles.mainContainer}>
        <h1 className={styles.header}>Create Instruction</h1>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <label 
            className={styles.label} >
            Instruction Type:
            <input
              className={styles.input}
              type="text"
              placeholder='Spanish Tutor'
              value={instructionType}
              onChange={(e) => setInstructionType(e.target.value)}
            />
          </label>
          <label 
            className={styles.label}>
            Your Instruction:
            <textarea
              className={styles.textarea}
              value={instructionContent}
              onChange={(e) => setInstructionContent(e.target.value)}
            />
          </label>
          <button 
          className={styles.submitButton}
          type="submit">
            Submit</button>
        </form>
      </div>
    </>
  );
}
