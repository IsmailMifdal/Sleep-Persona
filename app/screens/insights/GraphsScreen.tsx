import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import Card from '../../components/Card';
import { colors, typography } from '../../theme';

export default function GraphsScreen() {
  return (
    <ScreenContainer title="Graphiques">
      <Card>
        <Text style={styles.placeholder}>
          Graphiques - Tendances et analyses visuelles
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
