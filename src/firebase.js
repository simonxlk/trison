import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const config = {
  apiKey: "AIzaSyCHaitxAAZoquWNvLMwNBviGNtprqDMMnE",
  authDomain: "trison-9cec4.firebaseapp.com",
  projectId: "trison-9cec4",
  storageBucket: "trison-9cec4.appspot.com",
  messagingSenderId: "318711297892",
  appId: "1:318711297892:web:da1a14069efd4456262c71"
}

const firebaseApp = initializeApp(config)
export const db = getFirestore(firebaseApp)
//const customers = db.collection('users')

//create user
// export const createUser = user => {
//     return customers.add(user)
// }

