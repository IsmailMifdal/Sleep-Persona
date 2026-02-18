import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import Card from '../../components/Card';
import { colors, spacing, typography } from '../../theme';

export default function SleepScoreScreen() {
  return (
    <ScreenContainer title="Score de Sommeil">
      <Card>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreValue}>82</Text>
          <Text style={styles.scoreLabel}>Score de la nuit</Text>
          <Text style={styles.scoreStatus}>Excellent sommeil! 🎉</Text>
        </View>
      </Card>

      <Card title="Détails">
        <View style={styles.detail}>
          <Text style={styles.detailLabel}>Durée</Text>
          <Text style={styles.detailValue}>7h 30min</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailLabel}>Qualité</Text>
          <Text style={styles.detailValue}>8/10</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailLabel}>Réveils</Text>
          <Text style={styles.detailValue}>1</Text>
        </View>
      </Card>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  scoreContainer: {
    alignItems: 'center',
    paddingVertical: spacing.lg,
  },
  scoreValue: {
    fontSize: 64,
    fontWeight: '700',
    color: colors.sleepExcellent,
    marginBottom: spacing.xs,
  },
  scoreLabel: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  scoreStatus: {
    ...typography.h4,
    color: colors.text,
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  detailLabel: {
    ...typography.body,
    color: colors.textSecondary,
  },
  detailValue: {
    ...typography.body,
    color: colors.text,
    fontWeight: '600',
  },
});
