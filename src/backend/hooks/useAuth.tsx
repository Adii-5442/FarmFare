import {useEffect, useState} from 'react';
// import auth from '@react-native-firebase/auth';
// import {FirebaseAuthTypes} from '@react-native-firebase/auth';
export function useAuth() {
  const [user, setuser] = useState(false);
  return {
    user,
  };
}
