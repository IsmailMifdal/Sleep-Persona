import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import ScreenContainer from '../../components/ScreenContainer';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { colors, spacing, typography } from '../../theme';
import { OnboardingStackParamList } from '../../navigation/types';

type SleepProfileScreenNavigationProp = StackNavigationProp<OnboardingStackParamList, 'SleepProfile'>;

export default function SleepProfileScreen() {
  const navigation = useNavigation<SleepProfileScreenNavigationProp>();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <ScreenContainer title="Profil Sommeil">
      <Text style={styles.question}>
        À quelle heure vous couchez-vous habituellement?
      </Text>

      <Card>
        <Text style={styles.label}>Heure de coucher</Text>
        <Text style={styles.hint}>
          Sélectionnez votre heure habituelle (en semaine)
        </Text>
        {/* Placeholder for time picker */}
        <View style={styles.timePlaceholder}>
          <Text style={styles.timeText}>22:30</Text>
        </View>
      </Card>

      <Card>
        <Text style={styles.label}>Heure de réveil</Text>
        <Text style={styles.hint}>
          Sélectionnez votre heure de réveil habituelle
        </Text>
        <View style={styles.timePlaceholder}>
          <Text style={styles.timeText}>07:00</Text>
        </View>
      </Card>

      <Card>
        <Text style={styles.label}>Différence week-end?</Text>
        <Text style={styles.hint}>
          Vos horaires changent-ils le week-end?
        </Text>
        {/* Placeholder for yes/no toggle */}
        <View style={styles.togglePlaceholder}>
          <Text style={styles.toggleText}>Oui / Non</Text>
        </View>
      </Card>

      <View style={styles.footer}>
        <Button
          title="Continuer"
          onPress={() => navigation.navigate('Objectives')}
          fullWidth
        />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  question: {
    ...typography.h3,
    color: colors.text,
    marginBottom: spacing.lg,
  },
  label: {
    ...typography.h4,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  hint: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  timePlaceholder: {
    backgroundColor: colors.surface,
    padding: spacing.lg,
    borderRadius: 12,
    alignItems: 'center',
  },
  timeText: {
    ...typography.h2,
    color: colors.primary,
  },
  togglePlaceholder: {
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 12,
    alignItems: 'center',
  },
  toggleText: {
    ...typography.body,
    color: colors.textSecondary,
  },
  footer: {
    marginTop: spacing.xl,
  },
});
