import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../frontend/Home';
import colors from '../../components/styles/colors';
import React, {useState, useEffect} from 'react';
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

const LoginJourneyStack = () => {
  <Stack.Navigator>
    <Stack.Screen name="ConsumerType" component={ConsumerType} />
    <Stack.Screen name="Location" component={Location} />
  </Stack.Navigator>;
}

const ChatStack = () => {

}
const OrderStack = () => {

}
const ProfileStack = () => {

}

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const UserStack = () => {



  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colors.BLACK,
            //borderRadius: 20,
          },
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarShowLabel: false,
            headerShown: false,

            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                }}>
                <Image
                  source={require('../../components/assets/home.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? colors.CYAN : colors.OFF_GREY,
                    height: 35,
                    width: 35,
                  }}
                />
                <Image
                  source={require('../../components/assets/home.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? colors.WHITE : colors.BLACK,
                    height: 5,
                    width: 5,
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="OrderStack"
          component={OrderStack}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../../components/assets/money_ledger.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? colors.CYAN : colors.OFF_GREY,
                    height: 35,
                    width: 35,
                  }}
                />
                <Image
                  source={require('../../components/assets/home.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? colors.WHITE : colors.BLACK,
                    height: 5,
                    width: 5,
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="ChatStack"
          component={ChatStack}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../../components/assets/chat.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? colors.CYAN : colors.OFF_GREY,
                    height: 35,
                    width: 35,
                  }}
                />
                <Image
                  source={require('../../components/assets/home.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? colors.WHITE : colors.BLACK,
                    height: 5,
                    width: 5,
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../../components/assets/person-profile.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? colors.CYAN : colors.OFF_GREY,
                    height: 35,
                    width: 35,
                  }}
                />
                <Image
                  source={require('../../components/assets/home.png')}
                  resizeMode="contain"
                  style={{
                    tintColor: focused ? colors.WHITE : colors.BLACK,
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
