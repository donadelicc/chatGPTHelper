// Importing auth and db from firebase.js
import { auth, db } from '../config/firebase.js';
import { collection, getDocs} from "firebase/firestore";


/*
// collection reference
const usersCollection = collection(db, 'globalInstructions');

// get collection data

getDocs(usersCollection)
    .then((snapchot) => {
        console.log(snapchot.docs)
    }
);

*/