import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../config/firebase'; // Importer fra din firebase.js fil
import styles from '@/styles/Navbar.module.css';
import { useAuth } from '../contexts/authDetails'; // Angi riktig sti til AuthContext


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
    // <nav className={styles.navbar}>
    //   <div className={styles.left}>
    //     <Link href="/" legacyBehavior>
    //         <img className={styles.logo} src="/gpt-logo.png" alt="Logo" />
    //     </Link>
    //   </div>
    //   <div className={styles.center}>
    //     {authUser ? (
    //       <>
    //         <button className={styles.myInstructionBtn}>
    //             <Link className={styles.linkStyle} href="/my-instructions">My Instructions</Link>
    //         </button>
    //         <button onClick={handleSignOut} className={styles.logoutBtn}>Log Out</button>
    //       </>
    //     ) : (
    //       <>
    //         <button className={styles.loginBtn}>
    //         <   Link className={styles.linkStyle} href="/logIn">Log In</Link>
    //         </button>
    //         <button className={styles.signupBtn}>
    //             <Link className={styles.linkStyle} href="/signUp">Sign Up</Link>
    //         </button>
    //       </>
    //     )}
    //   </div>
    //   <div className={styles.right}>
    //     <a href="mailto:preb1.anders1@gmail.com" className={styles.contactLink}>Contact</a>
    //   </div>
    // </nav>
    <nav className={styles.nav}>
        <div>
          <Link href="/" legacyBehavior>
              <img className={styles.logo} width={50} src="/gpt-logo.png" alt="Logo" />
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
