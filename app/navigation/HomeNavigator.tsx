import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeStackParamList } from './types';

// Import screens
import DashboardScreen from '../screens/home/DashboardScreen';
import EveningPlanScreen from '../screens/home/EveningPlanScreen';
import ActiveRoutineScreen from '../screens/home/ActiveRoutineScreen';
import BedtimeReminderScreen from '../screens/home/BedtimeReminderScreen';
import NightModeScreen from '../screens/home/NightModeScreen';

const Stack = createStackNavigator<HomeStackParamList>();

export default function HomeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#0F0F1E' },
      }}
    >
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="EveningPlan" component={EveningPlanScreen} />
      <Stack.Screen name="ActiveRoutine" component={ActiveRoutineScreen} />
      <Stack.Screen name="BedtimeReminder" component={BedtimeReminderScreen} />
      <Stack.Screen name="NightMode" component={NightModeScreen} />
    </Stack.Navigator>
  );
}
