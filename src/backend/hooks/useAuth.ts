import React, {useEffect, useState} from 'react';
import {getAuth, onAuthStateChanged, User} from 'firebase/auth';
import auth from '@react-native-firebase/auth'
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export function useAuth() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      setUser(user);
    })

    return subscriber;
  }, []);

  return {
    user,
  };
}
