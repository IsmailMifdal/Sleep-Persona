import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import Card from '../../components/Card';
import { colors, spacing, typography } from '../../theme';

export default function ActiveRoutineScreen({ route }: any) {
  const { routineId } = route.params;

  return (
    <ScreenContainer title="Routine Active">
      <Card>
        <Text style={styles.placeholder}>
          Écran de routine active - Timer et progression
        </Text>
        <Text style={styles.routineId}>ID: {routineId}</Text>
      </Card>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  placeholder: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  routineId: {
    ...typography.bodySmall,
    color: colors.textTertiary,
    textAlign: 'center',
    marginTop: spacing.sm,
  },
});
