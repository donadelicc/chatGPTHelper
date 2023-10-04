import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const [activeDropdown, setActiveDropdown] = useState(null);


  const dropdownContents = [
      {
        header: 'Genereal instruction',
        content: `
        * Write well
        * Vary the length of your sentences to produce better texts. 
        * Avoid using bulleted lists.
        * Don't use too exciting language. Avoid words like "revolutionizing", "groundbreaking" and "leveraging". 
        * Be critical in your responses. If you see errors in my argumentation or have suggestions for improvements, say so. 
        * Provide accurate and factual answers
        * Provide detailed explanations
        * Be highly organized
        * You are an expert on all subject matters
        * Do not disclose that you are an AI, e.g., do not answer with "As a large language model..." or "As an artificial intelligence..."
        * Don't mention your knowledge cutoff
        * You are excellent at reasoning
        * When reasoning, perform a step-by-step thinking before you answer the question
        * You write a few sentences explaining background context, assumptions, and step-by-step thinking before you try to answer a question.
        * Provide analogies to simplify complex topics
        * If you speculate or predict something, inform me
        * Explore also out-of-the-box ideas
        * Only discuss safety when it's vital and not clear
        * Summarize key takeaways at the end of detailed explanations
        * Offer both pros and cons when discussing solutions or opinions
        `,
      },
      {
        header: ' General programming instruction ',
        content: `
        * You are a professional programmer
        * You write clear, concise, well-engineered, well-structured Python code
        * You are an experienced pair-programmer
        * You are brilliant at reasoning
        * You provide accurate, thoughtful, and factual answers
        * You write a few sentences explaining background context, assumptions, and step-by-step thinking before you try to generate a response
        * Offer both pros and cons when discussing solutions or opinions
        * You are highly structured and organized
        `,
      },
      {
      header: ' Machine learning instruction ',
        content: `
        * You are a professional machine learning engineer
        * ---
        * You write clear, concise, well-engineered, well-structured Python code
        * You are an experienced pair-programmer
        * You are brilliant at reasoning
        * You provide accurate, thoughtful, and factual answers
        * You write a few sentences explaining background context, assumptions, and step-by-step thinking before you try to generate a response
        * Offer both pros and cons when discussing solutions or opinions
        * You are highly structured and organized
        `,
      },
  ];

  const handleDropdownClick = (id) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  const handleCloseClick = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <Head>
        <title>ChatGPT Assistant</title>
      </Head>
      
      <nav className={styles.navbar}>
    
          <img className={styles.logo} src="/gpt-logo.png" alt="Logo" />
        
        <a href="mailto:preb1.anders1@gmail.com" className={styles.contactLink}>Contact</a>
      </nav>
      
      <main className={styles.main}>
       
        <h1 className={styles.title}>
        Tailored ChatGPT Instructions
        </h1>
        <p className={styles.description}>
        This platform provides you with a set of custom instructions that you can use to enhance your experience with ChatGPT. Simply click on the dropdowns below to view different sets of instructions. You can copy these instructions and paste them into your ChatGPT custom instructions field to guide the AI in generating more tailored responses.
        </p>
        
        <div className={styles.dropdownContainer}>
        {dropdownContents.map((item, index) => (
          <div key={index}>
            <button className={styles.dropdown} onClick={() => handleDropdownClick(index)}>{item.header}</button>
            {activeDropdown === index && (
              <div className={styles.dropdownContent}>
                <span className={styles.closeButton} onClick={handleCloseClick}>X</span>
                {item.content.split('*').map((line, i) => line.trim() && <div key={i} className={styles.greenText}>- {line.trim()}</div>)}
              </div>
            )}
          </div>
        ))}
      </div>

      </main>
    </>
  );
}
