
import { initializeApp } from "firebase/app"
// import { firestore } from 'firebase'
import { 
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
    query,
    where,
    collectionGroup
} from "firebase/firestore/lite"


const firebaseConfig = {
  apiKey: "AIzaSyAylHve24eHUP09S9iAWg8mzrsIzDJ1VvU",
  authDomain: "vans-d1b5c.firebaseapp.com",
  projectId: "vans-d1b5c",
  storageBucket: "vans-d1b5c.appspot.com",
  messagingSenderId: "1010804913913",
  appId: "1:1010804913913:web:8c826f41f24e43b0c3d428",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

export async function getVans(){
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    })

    return vans
}

export async function getVan(id){
    const vanDocRef = doc(db, "vans", id)
    const snapshot = await getDoc(vanDocRef)
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}

export async function getHostVans(id){
    const q = query(vansCollectionRef, where("userId", "==", id))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    })

    return vans
}

export async function getHostVan(userId, id){
    const vanDocRef = doc(db, "vans", id)
    const snapshot = await getDoc(vanDocRef)
    if (snapshot.exists() && snapshot.data().userId === userId) {
        return {
            ...snapshot.data(),
            id: snapshot.id
        }
    }else{
        throw {
            message: "This van doesn't exists!",
            status: 404
        }
    }
}


const usersCollectionRef = collection(db, "users")

export async function getUser(userId){
    const userDocRef = doc(db, "users", userId)
    const snapshot = await getDoc(userDocRef)
    // console.log(snapshot.data())
    return {
        ...snapshot.data(),
        password: null,
        id: snapshot.id
    }
}

export async function loginUser(creds) {

    const { email, password } = creds
    const q = query(usersCollectionRef, where("email", "==", `${email}`))
    const snapshot = await getDocs(q)
    
    let authenticated = false

    const data = snapshot.docs.map(doc => {   
            if(email === doc.data().email && password === doc.data().password){
                authenticated = true
                return {
                    ...doc.data(),
                    id: doc.id,
                }
            }
    })

    const user = data[0]
    
    if(!authenticated){
        throw {
            message: "No user with those credentials found!",
            status: 401,
        }
    }
    
    user.password = undefined
    return user
}
