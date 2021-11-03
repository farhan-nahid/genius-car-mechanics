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
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  // all providers

  const googleProvider = new GoogleAuthProvider();

  // google sign in function

  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // logout function

  const logOut = () => {
    signOut(auth)
      .then(() => setLoggedInUser(null))
      .catch((err) => toast.error(err.message))
      .finally(() => setIsLoading(false));
  };

  // observe user state change

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      user ? setLoggedInUser(user) : setLoggedInUser(null);
      setIsLoading(false);
    });
    return () => unSubscribed;
  }, [auth]);

  return {
    loggedInUser,
    signInUsingGoogle,
    logOut,
    setIsLoading,
    isLoading,
  };
};

export default useFirebase;
