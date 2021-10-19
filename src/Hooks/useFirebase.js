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
  const [isLoading, setIsLoading] = useState(true)



  const signInUsingGoogle = () => {
    setIsLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  // Github 
  const signInUsingGithub = () => {
    setIsLoading(true)
    return signInWithPopup(auth, githubProvider)
  }

  // facebook 
  const signInUsingFacebook = () => {
    setIsLoading(true)
    return signInWithPopup(auth, facebookProvider)
  }

  const handleEmail = e => {
    setEmail(e.target.value)
  }
  const handleName = e => {
    setName(e.target.value)
  }
  const handlePassword = e => {
    setPassword(e.target.value)
    console.log(e.target.value);
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

  const handleLogin =() => {
    return processLogin(email, password)

  }

  const processLogin = (email, password) => {
    setIsLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
      
  }
  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user
        setUser(user)
        setError('')
        verifyEmail()
        setUserName()
        window.location.assign('/')
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
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
      setIsLoading(false)
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
    logOut,
    setIsLoading,
    isLoading,
    setError,
    setUser

  }
}

export default useFirebase