import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./Firebase.config";

const initFirebaseAuthentication = () => {
    const app = initializeApp(firebaseConfig)
    getAnalytics(app);
}

export default initFirebaseAuthentication
