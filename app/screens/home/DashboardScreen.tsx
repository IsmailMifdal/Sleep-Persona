import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import ScreenContainer from '../../components/ScreenContainer';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { colors, spacing, typography, borderRadius } from '../../theme';
import { HomeStackParamList } from '../../navigation/types';

type DashboardScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'Dashboard'>;

export default function DashboardScreen() {
  const navigation = useNavigation<DashboardScreenNavigationProp>();

  return (
    <ScreenContainer title="Dashboard" scrollable={true}>
      {/* Sleep Score */}
      <Card>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreLabel}>Score Sommeil</Text>
          <Text style={styles.scoreValue}>78</Text>
          <Text style={styles.scoreStatus}>Bon sommeil</Text>
        </View>
      </Card>

      {/* Current Persona */}
      <Card>
        <View style={styles.personaHeader}>
          <Text style={styles.personaEmoji}>😰</Text>
          <View style={styles.personaInfo}>
            <Text style={styles.personaName}>Dormeur Stressé</Text>
            <Text style={styles.personaMode}>Mode: Stress Protection</Text>
          </View>
        </View>
      </Card>

      {/* Recovery Status */}
      <Card title="État de Récupération">
        <View style={styles.recoveryBar}>
          <View style={[styles.recoveryFill, { width: '75%' }]} />
        </View>
        <Text style={styles.recoveryText}>Bonne récupération - 75%</Text>
      </Card>

      {/* Evening Plan */}
      <Card title="Plan de ce soir">
        <Text style={styles.planTime}>Coucher suggéré: 22:30</Text>
        <Text style={styles.planDuration}>Routine: 30 minutes</Text>
        <Button
          title="Voir le plan détaillé"
          onPress={() => navigation.navigate('EveningPlan')}
          variant="secondary"
          fullWidth
        />
      </Card>

      {/* Daily Advice */}
      <Card title="Conseil du jour">
        <View style={styles.advice}>
          <Text style={styles.adviceIcon}>💡</Text>
          <View style={styles.adviceContent}>
            <Text style={styles.adviceTitle}>Réduisez les écrans</Text>
            <Text style={styles.adviceText}>
              Évitez les écrans 1h avant le coucher pour améliorer votre endormissement
            </Text>
          </View>
        </View>
      </Card>

      {/* Streak */}
      <View style={styles.streak}>
        <Text style={styles.streakEmoji}>🔥</Text>
        <Text style={styles.streakText}>7 jours de routine complétée</Text>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  scoreContainer: {
    alignItems: 'center',
    paddingVertical: spacing.lg,
  },
  scoreLabel: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  scoreValue: {
    fontSize: 64,
    fontWeight: '700',
    color: colors.sleepGood,
    marginBottom: spacing.xs,
  },
  scoreStatus: {
    ...typography.h4,
    color: colors.text,
  },
  personaHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  personaEmoji: {
    fontSize: 48,
  },
  personaInfo: {
    flex: 1,
  },
  personaName: {
    ...typography.h3,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  personaMode: {
    ...typography.body,
    color: colors.primary,
  },
  recoveryBar: {
    height: 8,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.round,
    overflow: 'hidden',
    marginBottom: spacing.sm,
  },
  recoveryFill: {
    height: '100%',
    backgroundColor: colors.sleepGood,
  },
  recoveryText: {
    ...typography.body,
    color: colors.textSecondary,
  },
  planTime: {
    ...typography.h4,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  planDuration: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  advice: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  adviceIcon: {
    fontSize: 32,
  },
  adviceContent: {
    flex: 1,
  },
  adviceTitle: {
    ...typography.body,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  adviceText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  streak: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    padding: spacing.lg,
    backgroundColor: colors.backgroundCard,
    borderRadius: borderRadius.lg,
    marginTop: spacing.md,
  },
  streakEmoji: {
    fontSize: 24,
  },
  streakText: {
    ...typography.body,
    color: colors.text,
    fontWeight: '600',
  },
});
