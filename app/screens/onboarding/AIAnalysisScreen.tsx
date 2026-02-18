import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import ScreenContainer from '../../components/ScreenContainer';
import { colors, spacing, typography } from '../../theme';
import { OnboardingStackParamList } from '../../navigation/types';

type AIAnalysisScreenNavigationProp = StackNavigationProp<OnboardingStackParamList, 'AIAnalysis'>;

export default function AIAnalysisScreen() {
  const navigation = useNavigation<AIAnalysisScreenNavigationProp>();

  useEffect(() => {
    // Simulate AI analysis
    const timer = setTimeout(() => {
      navigation.navigate('PersonaResult');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ScreenContainer scrollable={false} showHeader={false}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.title}>Analyse en cours...</Text>
        <Text style={styles.subtitle}>
          Notre IA analyse votre profil pour créer votre Sleep Persona
        </Text>
        
        <View style={styles.steps}>
          <Text style={styles.step}>✓ Analyse des contraintes</Text>
          <Text style={styles.step}>✓ Détection du chronotype</Text>
          <Text style={styles.step}>⏳ Calcul des traits comportementaux</Text>
          <Text style={styles.stepPending}>○ Génération des recommandations</Text>
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  title: {
    ...typography.h2,
    color: colors.text,
    marginTop: spacing.xl,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  steps: {
    alignSelf: 'stretch',
    gap: spacing.md,
  },
  step: {
    ...typography.body,
    color: colors.primary,
  },
  stepPending: {
    ...typography.body,
    color: colors.textTertiary,
  },
});
