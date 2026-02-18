import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './app/navigation/types';
import OnboardingNavigator from './app/navigation/OnboardingNavigator';
import MainNavigator from './app/navigation/MainNavigator';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [isOnboarded, setIsOnboarded] = useState(false);

  // In a real app, check if user has completed onboarding
  // For now, always show onboarding
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isOnboarded ? (
          <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
        ) : (
          <Stack.Screen name="Main" component={MainNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
