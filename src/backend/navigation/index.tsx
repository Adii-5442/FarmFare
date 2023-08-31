import React from 'react';
import UserStack from './userStack';
import AuthStack from './authStack';
import { useAuth } from '../hooks/useAuth';

export default function RootNavigation() {
  const { user } = useAuth();
  console.log("Auth status :",user?.displayName)
  return user ? <UserStack /> : <AuthStack  />;
}
