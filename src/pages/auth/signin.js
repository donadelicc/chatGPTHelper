import React, {useState} from 'react';
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import styles from '../../styles/Auth.module.css';


const SignIn = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        // Firebase login
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                //console.log(user);
                router.push('/');  // Omdirigerer til hovedsiden
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
                onSubmit={signIn}
            >
                <h1 className={styles.signin_header}>Log in</h1>
                <input className={styles.input}
                    type='email' 
                    placeholder='Enter your email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}    
                ></input>
                <input className={styles.input}
                type='password' 
                placeholder='Enter your password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button  
                className={styles.signin_button}
                type='submit'
                >Log in</button>
            </form>
        </div>
    );
}

export default SignIn;
