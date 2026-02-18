import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MorningStackParamList } from './types';

// Import screens
import MorningCheckinScreen from '../screens/morning/MorningCheckinScreen';
import EnergyRatingScreen from '../screens/morning/EnergyRatingScreen';
import AIFeedbackScreen from '../screens/morning/AIFeedbackScreen';
import SleepScoreScreen from '../screens/morning/SleepScoreScreen';

const Stack = createStackNavigator<MorningStackParamList>();

export default function MorningNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#0F0F1E' },
      }}
    >
      <Stack.Screen name="MorningCheckin" component={MorningCheckinScreen} />
      <Stack.Screen name="EnergyRating" component={EnergyRatingScreen} />
      <Stack.Screen name="AIFeedback" component={AIFeedbackScreen} />
      <Stack.Screen name="SleepScore" component={SleepScoreScreen} />
    </Stack.Navigator>
  );
}
