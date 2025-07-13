import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../components/Firebase/Firebase";

export const UserInfoContext = createContext();

function Custom({ children }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData({
          name: user.displayName,
          email: user.email,
          profilePicture: user.photoURL,
        });
      } else {
        setUserData(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const RegestionFun = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogine = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLo = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        userUpdateProfile({
          name: user.displayName,
          email: user.email,
          profilePicture: user.photoURL,
        });
        setError("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData({
          name: user.displayName,
          email: user.email,
          profilePicture: user.photoURL,
        });
      } else {
        setUserData("");
      }
    });
  }, []);
  const logOut = () => {
    return signOut(auth).then(() => setUserData(null));
  };

  const userUpdateProfile = (info) => {
    setUserData(info);
  };

  return (
    <UserInfoContext.Provider
      value={{
        RegestionFun,
        userLogine,
        logOut,
        userUpdateProfile,
        userData,
        googleLo,
        loading
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
}

export default Custom;
