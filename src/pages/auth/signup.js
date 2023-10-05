import React, {useState} from 'react';
import styles from '@/styles/Home.module.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = (e) => {
        e.preventDefault();
        // Firebase login
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
               // console.log(errorCode);
                const errorMessage = error.message;
            });
    }

    return (
        <div className={styles.signin_container}>
            <form className={styles.signin_form}
                onSubmit={signUp}
            >
                <h1 className={styles.signin_header}>Create an account</h1>
                <input 
                    type='email' 
                    placeholder='Enter your email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}    
                ></input>
                <input 
                type='password' 
                placeholder='Enter your password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button  
                className={styles.signin_button}
                type='submit'
                >Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
