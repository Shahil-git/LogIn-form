import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import PropTypes from 'prop-types';
import auth from "../Firebase/Firebase.confige";

export const AuthContext = createContext(null);

const FirebaseAuth = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword( auth , email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  // SignIn
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.error("Error signing in: ", error);
      });
  };

  const allValue = { createUser, signIn, user };
  return (
    <AuthContext.Provider value={allValue}>
      {children}
    </AuthContext.Provider>
  );
};

FirebaseAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FirebaseAuth;
