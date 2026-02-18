import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import Card from '../../components/Card';
import { colors, typography } from '../../theme';

export default function AIFeedbackScreen() {
  return (
    <ScreenContainer title="Feedback IA">
      <Card>
        <Text style={styles.placeholder}>
          Feedback IA - Analyse et recommandations
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
