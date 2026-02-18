import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import Card from '../../components/Card';
import { colors, typography } from '../../theme';

export default function HealthConnectScreen() {
  return (
    <ScreenContainer title="Santé Connectée">
      <Card>
        <Text style={styles.placeholder}>
          Connexion Apple Health / Google Fit
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
