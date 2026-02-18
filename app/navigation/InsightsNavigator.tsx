import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { InsightsStackParamList } from './types';

// Import screens
import HistoryScreen from '../screens/insights/HistoryScreen';
import GraphsScreen from '../screens/insights/GraphsScreen';
import ProgressScreen from '../screens/insights/ProgressScreen';
import PatternsScreen from '../screens/insights/PatternsScreen';

const Stack = createStackNavigator<InsightsStackParamList>();

export default function InsightsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#0F0F1E' },
      }}
    >
      <Stack.Screen name="History" component={HistoryScreen} />
      <Stack.Screen name="Graphs" component={GraphsScreen} />
      <Stack.Screen name="Progress" component={ProgressScreen} />
      <Stack.Screen name="Patterns" component={PatternsScreen} />
    </Stack.Navigator>
  );
}
