import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../frontend/Home';
import colors from '../../components/styles/colors';
import React, { useState, useEffect } from 'react';
import ConsumerType from '../../frontend/Preferences/ConsumerType';
import {
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Alert,
} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Location from '../../frontend/Preferences/Location';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="ConsumerType" component={ConsumerType} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const UserStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../../components/assets/home.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? colors.BLACK : '#D1CAD8',
                    height: 35,
                    width: 35,
                  }}
                />
                <Image
                  source={require('../../components/assets/home.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? colors.BLACK : colors.WHITE,
                    height: 5,
                    width: 5,
                  }}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default UserStack;
