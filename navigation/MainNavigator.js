import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { ChatSettingsScreen } from '../screens/ChatSettingsScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { ChatListScreen } from '../screens/ChatListScreen';

import { Ionicons } from '@expo/vector-icons';
import { ChatScreen } from '../screens/ChatScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerTitle: '' }}>
      <Tab.Screen
        name='Chat List'
        component={ChatListScreen}
        options={{
          tabBarLabel: 'Chats',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='chatbubble-outline' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Settings List'
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='settings-outline' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='ChatScreen'
        component={ChatScreen}
        options={{ headerTitle: '', headerBackTitle: 'Back' }}
      />
      <Stack.Screen
        name='ChatSettings'
        component={ChatSettingsScreen}
        options={{ headerTitle: 'Settings', headerBackTitle: 'Back' }}
      />
    </Stack.Navigator>
  );
};
