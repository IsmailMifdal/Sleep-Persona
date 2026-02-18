import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import ScreenContainer from '../../components/ScreenContainer';
import Button from '../../components/Button';
import { colors, spacing, typography } from '../../theme';
import { OnboardingStackParamList } from '../../navigation/types';

type WelcomeScreenNavigationProp = StackNavigationProp<OnboardingStackParamList, 'Welcome'>;

export default function WelcomeScreen() {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  return (
    <ScreenContainer scrollable={false} showHeader={false}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.emoji}>😴</Text>
          <Text style={styles.title}>Sleep Persona</Text>
          <Text style={styles.subtitle}>
            Coaching sommeil adaptatif basé sur l'IA
          </Text>
          <Text style={styles.description}>
            Optimisez votre sommeil avec un coaching personnalisé qui s'adapte à votre comportement, stress et habitudes quotidiennes.
          </Text>
        </View>
        
        <View style={styles.footer}>
          <Button
            title="Commencer"
            onPress={() => navigation.navigate('SleepProfile')}
            fullWidth
          />
          <Text style={styles.disclaimer}>
            Analyse personnalisée en 3 minutes
          </Text>
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: spacing.xl,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 80,
    marginBottom: spacing.lg,
  },
  title: {
    ...typography.h1,
    color: colors.text,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    ...typography.h4,
    color: colors.primary,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
  description: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    paddingHorizontal: spacing.lg,
  },
  footer: {
    gap: spacing.md,
  },
  disclaimer: {
    ...typography.bodySmall,
    color: colors.textTertiary,
    textAlign: 'center',
  },
});
