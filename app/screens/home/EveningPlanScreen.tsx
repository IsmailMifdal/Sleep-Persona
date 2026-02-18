import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenContainer from '../../components/ScreenContainer';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { colors, spacing, typography, borderRadius } from '../../theme';

export default function EveningPlanScreen() {
  const navigation = useNavigation();

  const routineSteps = [
    { id: 1, title: 'Diminuer la lumière', duration: 5, icon: '💡', category: 'environment' },
    { id: 2, title: 'Arrêter les écrans', duration: 10, icon: '📱', category: 'preparation' },
    { id: 3, title: 'Exercice de respiration', duration: 5, icon: '🧘', category: 'relaxation' },
    { id: 4, title: 'Lecture légère', duration: 10, icon: '📖', category: 'relaxation' },
  ];

  return (
    <ScreenContainer title="Plan du Soir">
      <Card>
        <View style={styles.header}>
          <Text style={styles.time}>22:00</Text>
          <Text style={styles.timeLabel}>Heure de début</Text>
        </View>
      </Card>

      <Card title="Routine Personnalisée">
        <Text style={styles.duration}>Durée totale: 30 minutes</Text>
        
        {routineSteps.map((step, index) => (
          <View key={step.id} style={styles.step}>
            <View style={styles.stepLeft}>
              <Text style={styles.stepIcon}>{step.icon}</Text>
              <View style={styles.stepInfo}>
                <Text style={styles.stepTitle}>{step.title}</Text>
                <Text style={styles.stepDuration}>{step.duration} min</Text>
              </View>
            </View>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>{index + 1}</Text>
            </View>
          </View>
        ))}
      </Card>

      <Card title="Conseils">
        <Text style={styles.tip}>
          💡 Suivez cette routine pour optimiser votre endormissement
        </Text>
        <Text style={styles.tip}>
          🔕 Activez le mode "Ne pas déranger" sur votre téléphone
        </Text>
        <Text style={styles.tip}>
          🌡️ Température idéale: 18-20°C
        </Text>
      </Card>

      <Button
        title="Démarrer la routine"
        onPress={() => navigation.navigate('ActiveRoutine', { routineId: '1' })}
        fullWidth
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: spacing.lg,
  },
  time: {
    fontSize: 48,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  timeLabel: {
    ...typography.body,
    color: colors.textSecondary,
  },
  duration: {
    ...typography.body,
    color: colors.primary,
    marginBottom: spacing.lg,
    fontWeight: '600',
  },
  step: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  stepLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    flex: 1,
  },
  stepIcon: {
    fontSize: 32,
  },
  stepInfo: {
    flex: 1,
  },
  stepTitle: {
    ...typography.body,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  stepDuration: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: borderRadius.round,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumberText: {
    ...typography.body,
    color: colors.primary,
    fontWeight: '600',
  },
  tip: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
});
