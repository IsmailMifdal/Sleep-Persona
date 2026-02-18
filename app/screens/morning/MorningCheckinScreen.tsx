import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenContainer from '../../components/ScreenContainer';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { colors, spacing, typography } from '../../theme';

export default function MorningCheckinScreen() {
  const navigation = useNavigation();

  return (
    <ScreenContainer title="Check-in Matinal">
      <Text style={styles.greeting}>Bonjour! 👋</Text>
      <Text style={styles.question}>Comment avez-vous dormi?</Text>
      
      <Card title="Qualité du sommeil">
        <Text style={styles.label}>Évaluez votre sommeil (1-10)</Text>
        <View style={styles.ratingPlaceholder}>
          <Text style={styles.rating}>😴 ━━━━━━━━━━ 😊</Text>
        </View>
      </Card>

      <Card title="Réveils nocturnes">
        <Text style={styles.label}>Combien de fois vous êtes-vous réveillé?</Text>
        <View style={styles.countPlaceholder}>
          <Text style={styles.count}>0 • 1 • 2 • 3+</Text>
        </View>
      </Card>

      <Button
        title="Continuer"
        onPress={() => navigation.navigate('EnergyRating')}
        fullWidth
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  greeting: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  question: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  label: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  ratingPlaceholder: {
    backgroundColor: colors.surface,
    padding: spacing.lg,
    borderRadius: 12,
    alignItems: 'center',
  },
  rating: {
    ...typography.body,
    color: colors.textSecondary,
  },
  countPlaceholder: {
    backgroundColor: colors.surface,
    padding: spacing.lg,
    borderRadius: 12,
    alignItems: 'center',
  },
  count: {
    ...typography.body,
    color: colors.textSecondary,
  },
});
