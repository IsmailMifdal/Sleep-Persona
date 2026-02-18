import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import ScreenContainer from '../../components/ScreenContainer';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { colors, spacing, typography, borderRadius } from '../../theme';
import { OnboardingStackParamList } from '../../navigation/types';

type PersonaResultScreenNavigationProp = StackNavigationProp<OnboardingStackParamList, 'PersonaResult'>;

export default function PersonaResultScreen() {
  const navigation = useNavigation<PersonaResultScreenNavigationProp>();

  // This would come from the AI analysis in a real app
  const personaType = 'stressed_insomniac';
  const personaLabel = 'Dormeur Stressé';
  const adaptiveMode = 'Stress Protection';

  return (
    <ScreenContainer scrollable={true} showHeader={false}>
      <View style={styles.header}>
        <Text style={styles.badge}>Votre Sleep Persona</Text>
        <Text style={styles.emoji}>😰</Text>
        <Text style={styles.personaName}>{personaLabel}</Text>
        <Text style={styles.mode}>Mode: {adaptiveMode}</Text>
      </View>

      <Card title="Profil détecté">
        <Text style={styles.description}>
          Vous êtes un dormeur sensible au stress avec une difficulté à déconnecter le soir. 
          Votre sommeil est souvent perturbé par les préoccupations quotidiennes.
        </Text>
      </Card>

      <Card title="Traits principaux">
        <View style={styles.trait}>
          <Text style={styles.traitLabel}>Sensibilité au stress</Text>
          <Text style={styles.traitValue}>Élevée</Text>
        </View>
        <View style={styles.trait}>
          <Text style={styles.traitLabel}>Tolérance dette sommeil</Text>
          <Text style={styles.traitValue}>Faible</Text>
        </View>
        <View style={styles.trait}>
          <Text style={styles.traitLabel}>Régularité</Text>
          <Text style={styles.traitValue}>Modérée</Text>
        </View>
      </Card>

      <Card title="Recommandations immédiates">
        <View style={styles.recommendation}>
          <Text style={styles.recIcon}>🧘</Text>
          <View style={styles.recContent}>
            <Text style={styles.recTitle}>Routine de décompression</Text>
            <Text style={styles.recText}>
              30 min avant le coucher pour réduire le stress
            </Text>
          </View>
        </View>
        <View style={styles.recommendation}>
          <Text style={styles.recIcon}>📱</Text>
          <View style={styles.recContent}>
            <Text style={styles.recTitle}>Limitation des écrans</Text>
            <Text style={styles.recText}>
              Arrêt 1h avant le coucher recommandé
            </Text>
          </View>
        </View>
      </Card>

      <View style={styles.footer}>
        <Button
          title="Commencer mon coaching"
          onPress={() => {
            // Navigate to main app (will be implemented)
            console.log('Navigate to main app');
          }}
          fullWidth
        />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
  },
  badge: {
    ...typography.caption,
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: spacing.sm,
  },
  emoji: {
    fontSize: 64,
    marginBottom: spacing.md,
  },
  personaName: {
    ...typography.h1,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  mode: {
    ...typography.body,
    color: colors.textSecondary,
  },
  description: {
    ...typography.body,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  trait: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  traitLabel: {
    ...typography.body,
    color: colors.textSecondary,
  },
  traitValue: {
    ...typography.body,
    color: colors.primary,
    fontWeight: '600',
  },
  recommendation: {
    flexDirection: 'row',
    gap: spacing.md,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  recIcon: {
    fontSize: 32,
  },
  recContent: {
    flex: 1,
  },
  recTitle: {
    ...typography.body,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  recText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  footer: {
    marginTop: spacing.xl,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
});
