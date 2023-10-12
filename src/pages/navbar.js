import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../config/firebase'; // Importer fra din firebase.js fil
import styles from '@/styles/Navbar.module.css';
import { useAuth } from '../contexts/authDetails'; // Angi riktig sti til AuthContext
import { Image } from "next/image"

const NavBar = () => {
  //const [authUser, setAuthUser] = useState(null);
  const { authUser } = useAuth();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("Sign-out successful.");
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <nav className={styles.nav}>
        <div>
          <Link href="/" legacyBehavior>
              <Image className={styles.logo} width={50} src="/gpt-logo.png" alt="Logo" />
          </Link>
        </div>
        
          <ul className={styles.nav__list}>
          { authUser ? (
            <>
              <li className={styles.li}>
                <Link className={styles.link} href="/">my instructions</Link>
              </li>
              <li  className={styles.li}>
                <Link className={styles.link}  href="/">get inspired</Link>
              </li>
              <li  className={styles.li}>
                <button className={styles.link} onClick={handleSignOut}>Log Out</button>
              </li>
            </>
          ): 
          <>
          <button>
            <Link className={styles.link}  href="/logIn">Log In</Link>
          </button>
          <button className={styles.signupBtn}>
            <Link className={styles.link} href="/signUp">Sign Up</Link>
          </button>
          </>
        }

          <li>
            <a className={styles.link} href="mailto:preb1.anders1@gmail.com">Contact</a>
          </li>
        </ul>            
        
    </nav>
  );
  
};

export default NavBar;
