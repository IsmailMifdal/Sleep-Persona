import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PersonaStackParamList } from './types';

// Import screens
import CurrentPersonaScreen from '../screens/persona/CurrentPersonaScreen';
import EvolutionScreen from '../screens/persona/EvolutionScreen';
import AdjustmentsScreen from '../screens/persona/AdjustmentsScreen';
import CoachingScreen from '../screens/persona/CoachingScreen';

const Stack = createStackNavigator<PersonaStackParamList>();

export default function PersonaNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#0F0F1E' },
      }}
    >
      <Stack.Screen name="CurrentPersona" component={CurrentPersonaScreen} />
      <Stack.Screen name="Evolution" component={EvolutionScreen} />
      <Stack.Screen name="Adjustments" component={AdjustmentsScreen} />
      <Stack.Screen name="Coaching" component={CoachingScreen} />
    </Stack.Navigator>
  );
}
