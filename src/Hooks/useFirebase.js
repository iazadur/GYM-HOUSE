import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initFirebaseAuthentication from "../Firebase/Firebase.init"
initFirebaseAuthentication()

const auth = getAuth();

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const facebookProvider = new FacebookAuthProvider()


const useFirebase = () => {

  const [user, setUser] = useState({})
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")



  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user)
      })
  }


  const signInUsingGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user)
      })
  }

  const signInUsingFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user)
      })
  }

  const handleEmail = e => {
    setEmail(e.target.value)
  }
  const handleName = e => {
    setName(e.target.value)
  }
  const handlePassword = e => {
    setPassword(e.target.value)
  }

  const handleRegistration = e => {
    e.preventDefault()
    if (password.length < 6) {
      return setError("Password Must be 6 charecter")
    }
    if (!/(?=(.*[a-z]){1,})/.test(password)) {
      return setError("Password Must be 1 uppercase charecter")
    }
    if (!/(?=(.*[A-Z]){1,})/.test(password)) {
      return setError("Password Must be 1 Lowercase charecter")
    }
    // if (!/(?=(.*[0-9]){2,}) /.test(password)) {
    //   return setError("Password Must be 2 numbers")
    // }
    createNewUser(email, password)
  }

  const handleLogin = e=>{
    e.preventDefault()
    processLogin( email, password)

  }

  const processLogin = ( email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user
        console.log('Login User', user)
        setError('')
        
      })
      .catch(error => {
        setError(error.message)
      })
  }
  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user
        console.log(user)
        setError('')
        verifyEmail()
        setUserName()
      })
      .catch(error => {
        setError(error.message)
      })
  }

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then((result) => {
        console.log(result);
      })
  }

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      }
    })
  }, [])

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(result => {
        console.log(result);
      })
  }

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
  }


  return {
    user,
    error,
    signInUsingGoogle,
    signInUsingGithub,
    signInUsingFacebook,
    handleEmail,
    handleName,
    handlePassword,
    handleRegistration,
    handleResetPassword,
    verifyEmail,
    handleLogin,
    logOut

  }
}

export default useFirebase