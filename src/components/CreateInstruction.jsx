import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '@/styles/CreateInstruction.module.css';

const CreateInstruction = () => {
  const [instructionType, setInstructionType] = useState('');
  const [instructionContent, setInstructionContent] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [nameMissingError, setNameMissingError] = useState('');
  const [emptyInstructionError, setEmptyInstructionError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setNameMissingError(''); // Reset any previous error messages
    setEmptyInstructionError('');

    if (instructionType === '') {
      setNameMissingError('You need to provide a name for your instruction');
    }
    if (instructionContent === '') {
      setEmptyInstructionError('You need to provide some instructions');
    }

    if (instructionType !== '' && instructionContent !== '') {
      // If both fields are not empty, perform your submit logic here
      console.log(`Type: ${instructionType}, Content: ${instructionContent}`);
    }
  };

  useEffect(() => {
    if (instructionType !== '' && instructionContent !== '') {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [instructionContent, instructionType]);

  return (
    <>
      <Head>
        <title>Create Instruction</title>
      </Head>

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
                onChange={(e) => setInstructionType(e.target.value)}
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
              <textarea
                className={styles.textarea}
                onChange={(e) => setInstructionContent(e.target.value)}
              ></textarea>
            </div>

            <div className={styles.field}>
              <button
                type='submit'
                className={`${styles.submitButton} ${
                  !isValid ? styles.disabled : ''
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

export default CreateInstruction;
