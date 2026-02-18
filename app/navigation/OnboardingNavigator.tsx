import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { OnboardingStackParamList } from './types';

// Import screens (will be created)
import WelcomeScreen from '../screens/onboarding/WelcomeScreen';
import SleepProfileScreen from '../screens/onboarding/SleepProfileScreen';
import ObjectivesScreen from '../screens/onboarding/ObjectivesScreen';
import ConstraintsScreen from '../screens/onboarding/ConstraintsScreen';
import AIAnalysisScreen from '../screens/onboarding/AIAnalysisScreen';
import PersonaResultScreen from '../screens/onboarding/PersonaResultScreen';

const Stack = createStackNavigator<OnboardingStackParamList>();

export default function OnboardingNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#0F0F1E' },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SleepProfile" component={SleepProfileScreen} />
      <Stack.Screen name="Objectives" component={ObjectivesScreen} />
      <Stack.Screen name="Constraints" component={ConstraintsScreen} />
      <Stack.Screen name="AIAnalysis" component={AIAnalysisScreen} />
      <Stack.Screen name="PersonaResult" component={PersonaResultScreen} />
    </Stack.Navigator>
  );
}
