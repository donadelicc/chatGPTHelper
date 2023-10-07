import Head from 'next/head';
import { useState } from 'react';
import styles from '@/styles/Home.module.css';
import NavBar from './navbar'; // Angi riktig sti til NavBar-komponenten
import { useAuth } from '../contexts/authDetails'; // Angi riktig sti til AuthContext
// components
import Main from '@/components/Main';
import Sidebar from '../components/Sidebar';
import Link from 'next/link';


export default function Home() {
  // const [activeDropdown, setActiveDropdown] = useState(null);
  //const { authUser } = useAuth();


  

  

  return (
    <>
      <Head>
        <title>ChatGPT Assistant</title>
      </Head>
        {/* <NavBar /> */}
      <div style={{display:"flex"}}>
        <Sidebar />
        <Main />
      </div>

      
    </>
  );
}
