import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/hei.module.css'
import { getFirestore, collection, doc, setDoc, getDoc, addDoc } from 'firebase/firestore';
import { getAuth } from "firebase/auth";


const gloabalDb = 'globalInstruction'
const personalDb = 'users'


const CreateInstructionPage = () => {
  const [instructionType, setInstructionType] = useState('');
  const [instructionCategory, setInstructionCategory] = useState('');
  const [instructionContent, setInstructionContent] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [nameMissingError, setNameMissingError] = useState('');
  const [categoryMissingError, setCategoryMissingError] = useState('');
  const [emptyInstructionError, setEmptyInstructionError] = useState('');

  // Må disse initalliseres på nytt? Kan ikke disse bare importeres fra firebase.js?
  const db = getFirestore();
  const auth = getAuth();

  const handleNameChange = (e) => {
    setInstructionType(e.target.value);
    setNameMissingError('');
  };

  const handleCategoryChange = (e) => {
    setInstructionCategory(e.target.value);
    setCategoryMissingError('');
  };


  const handleInstructionsChange = (e) => {
    setInstructionContent(e.target.value);
    setEmptyInstructionError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setNameMissingError('');
    setCategoryMissingError('');
    setEmptyInstructionError('');

    if (instructionType === '') {
      setNameMissingError('You need to provide a name for your instruction');
    }

    if (instructionCategory === '') {
      setCategoryMissingError('You need to provide a category for your instruction');
    }

    if (instructionContent === '') {
      setEmptyInstructionError('You need to provide some instructions');
    }

    if (instructionType !== '' && instructionContent !== '' && instructionCategory !== '') {
      const sentenceArray = instructionContent.split("\n");

      const instruction = {
        name: instructionType,
        category: instructionCategory,
        instructionArray: sentenceArray,
      };
      console.table(instruction)

      async function addInstruction() {
        try {
          // Get the user document
          const userRef = doc(collection(db, personalDb), auth.currentUser.uid);
          const userDoc = await getDoc(userRef);
      
          if (userDoc.exists()) {
            console.log('User data:', userDoc.data());
          } else {
            console.log('No such document!');
          }
      
          // Add or update user info
          await setDoc(userRef, { 
            email: auth.currentUser.email,
          }, { merge: true });
      
          console.log('User added to database');
      
          // Add instruction to user's sub-collection
          const docRef = await addDoc(collection(userRef, 'instructions'), instruction);
      
          console.log('Instruction added with ID: ', docRef.id);
      
        } catch (error) {
          console.error('Error:', error);
        }
      }

  addInstruction();      

    }
  };


  useEffect(() => {
    if (instructionType !== '' && instructionCategory && instructionContent !== '') {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [instructionContent, instructionCategory, instructionType]);

  return (
    <>
      <Head>
        <title>Create Instruction</title>
      </Head>
      {/* <NavBar /> */}
      <div className={styles.mainContainer}>
        <div className={styles.main__content}>
          <div className={styles.headerContainer}>
            <h1 className={styles.header}>Create Instruction</h1>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <label className={styles.formLabel}>name</label>
                <p className={styles.errorMessage}>{nameMissingError}</p>
              </div>
              <input
                type="text"
                className={styles.nameInput}
                onChange={handleNameChange}
                value={instructionType}
              />
            </div>

            <div className={styles.field}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <label className={styles.formLabel}>instructions</label>
                <p className={styles.errorMessage} >{emptyInstructionError}</p>
              </div>

              <input
                type="text"
                className={styles.categoryInput}
                onChange={handleCategoryChange}
                value={instructionCategory}
              />

              <textarea
                className={styles.textarea}
                onChange={handleInstructionsChange}
                value={instructionContent}
              ></textarea>
            </div>

            <div className={styles.field}>
              <button
                type='submit'
                className={`${styles.submitButton} ${!isValid ? styles.disabled : ''
                  }`}
              >
                Save instruction
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateInstructionPage;
