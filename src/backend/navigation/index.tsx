import React from 'react';
import UserStack from './userStack';
import AuthStack from './authStack';
import { useAuth } from '../hooks/useAuth';

export default function RootNavigation() {
  const { user , CurrentData } = useAuth();
  console.log("Auth status :",user?.displayName)
  return user ? <UserStack user={user} CurrentData={CurrentData} /> : <AuthStack  />;
}
