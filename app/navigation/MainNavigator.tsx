import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from './types';
import { colors } from '../theme';

// Import navigators
import HomeNavigator from './HomeNavigator';
import MorningNavigator from './MorningNavigator';
import InsightsNavigator from './InsightsNavigator';
import PersonaNavigator from './PersonaNavigator';
import SettingsNavigator from './SettingsNavigator';

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.backgroundSecondary,
          borderTopColor: colors.border,
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textTertiary,
      }}
    >
      <Tab.Screen 
        name="HomeStack" 
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => '🏠',
        }}
      />
      <Tab.Screen 
        name="MorningStack" 
        component={MorningNavigator}
        options={{
          tabBarLabel: 'Morning',
          tabBarIcon: ({ color }) => '☀️',
        }}
      />
      <Tab.Screen 
        name="InsightsStack" 
        component={InsightsNavigator}
        options={{
          tabBarLabel: 'Insights',
          tabBarIcon: ({ color }) => '📊',
        }}
      />
      <Tab.Screen 
        name="PersonaStack" 
        component={PersonaNavigator}
        options={{
          tabBarLabel: 'Persona',
          tabBarIcon: ({ color }) => '👤',
        }}
      />
      <Tab.Screen 
        name="SettingsStack" 
        component={SettingsNavigator}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => '⚙️',
        }}
      />
    </Tab.Navigator>
  );
}
