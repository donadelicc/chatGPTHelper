import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase'; // Importer fra din firebase.js fil
import styles from '@/styles/Home.module.css';

const NavBar = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("Sign-out successful.");
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <nav>
       
        <img className={styles.logo} src="/gpt-logo.png" alt="Logo" />
        
        <a href="mailto:preb1.anders1@gmail.com" className={styles.contactLink}>Contact</a>
   
        {authUser ? (
        <>
          <span>{`Logged in as ${authUser.email}`}</span>
          <button onClick={handleSignOut}>Log Out</button>
        </>
      ) : (
        <>
          <Link href="/logIn">Log In</Link>
          <Link href="/signUp">Sign Up</Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
