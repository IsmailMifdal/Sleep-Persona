import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenContainer from '../../components/ScreenContainer';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { colors, spacing, typography } from '../../theme';

export default function EnergyRatingScreen() {
  const navigation = useNavigation();

  return (
    <ScreenContainer title="Niveau d'Énergie">
      <Card>
        <Text style={styles.label}>Comment vous sentez-vous ce matin?</Text>
        <View style={styles.energyPlaceholder}>
          <Text style={styles.energy}>😴 🥱 😐 🙂 😃</Text>
        </View>
      </Card>

      <Card title="Niveau de stress">
        <Text style={styles.label}>Quel est votre niveau de stress aujourd'hui?</Text>
        <View style={styles.stressPlaceholder}>
          <Text style={styles.stress}>Faible • Modéré • Élevé</Text>
        </View>
      </Card>

      <Button
        title="Voir mon score"
        onPress={() => navigation.navigate('SleepScore')}
        fullWidth
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  label: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  energyPlaceholder: {
    backgroundColor: colors.surface,
    padding: spacing.lg,
    borderRadius: 12,
    alignItems: 'center',
  },
  energy: {
    fontSize: 32,
  },
  stressPlaceholder: {
    backgroundColor: colors.surface,
    padding: spacing.lg,
    borderRadius: 12,
    alignItems: 'center',
  },
  stress: {
    ...typography.body,
    color: colors.textSecondary,
  },
});
