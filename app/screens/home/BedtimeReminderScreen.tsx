import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import Card from '../../components/Card';
import { colors, typography } from '../../theme';

export default function BedtimeReminderScreen() {
  return (
    <ScreenContainer title="Rappel Coucher">
      <Card>
        <Text style={styles.placeholder}>
          Écran de rappel de coucher - Notifications et alertes
        </Text>
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
});
