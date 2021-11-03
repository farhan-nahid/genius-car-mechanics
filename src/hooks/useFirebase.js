import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import initializeAuthentication from '../Pages/Auth/Firebase/firebase.init';

const useFirebase = () => {
  initializeAuthentication();
  const [loggedInUser, setLoggedInUser] = useState(null);

  const auth = getAuth();

  // all providers

  const googleProvider = new GoogleAuthProvider();

  // google sign in function

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // logout function

  const logOut = () => {
    signOut(auth)
      .then(() => setLoggedInUser(null))
      .catch((err) => toast.error(err.message));
  };

  // observe user state change

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      user ? setLoggedInUser(user) : setLoggedInUser(null);
    });
    return () => unSubscribed;
  }, [auth]);

  return { loggedInUser, signInUsingGoogle, logOut };
};

export default useFirebase;
