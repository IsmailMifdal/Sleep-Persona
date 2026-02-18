import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import Card from '../../components/Card';
import { colors, spacing, typography } from '../../theme';

export default function CurrentPersonaScreen() {
  return (
    <ScreenContainer title="Mon Persona">
      <View style={styles.header}>
        <Text style={styles.emoji}>😰</Text>
        <Text style={styles.name}>Dormeur Stressé</Text>
        <Text style={styles.mode}>Mode: Stress Protection</Text>
      </View>

      <Card title="Traits principaux">
        <Text style={styles.placeholder}>
          Détails du persona actuel
        </Text>
      </Card>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
  },
  emoji: {
    fontSize: 64,
    marginBottom: spacing.md,
  },
  name: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  mode: {
    ...typography.body,
    color: colors.primary,
  },
  placeholder: {
    ...typography.body,
    color: colors.textSecondary,
  },
});
