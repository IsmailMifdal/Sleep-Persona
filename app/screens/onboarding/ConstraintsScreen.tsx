import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import ScreenContainer from '../../components/ScreenContainer';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { colors, spacing, typography } from '../../theme';
import { OnboardingStackParamList } from '../../navigation/types';

type ConstraintsScreenNavigationProp = StackNavigationProp<OnboardingStackParamList, 'Constraints'>;

export default function ConstraintsScreen() {
  const navigation = useNavigation<ConstraintsScreenNavigationProp>();

  return (
    <ScreenContainer title="Vos Contraintes">
      <Text style={styles.question}>
        Parlez-nous de votre quotidien
      </Text>

      <Card title="Travail">
        <Text style={styles.label}>Type d'horaires</Text>
        <View style={styles.optionsPlaceholder}>
          <Text style={styles.optionText}>Fixe • Variable • Nuit • Hybride</Text>
        </View>
      </Card>

      <Card title="Enfants">
        <Text style={styles.label}>Avez-vous des enfants en bas âge?</Text>
        <View style={styles.optionsPlaceholder}>
          <Text style={styles.optionText}>Oui • Non</Text>
        </View>
      </Card>

      <Card title="Niveau de stress">
        <Text style={styles.label}>Comment évaluez-vous votre stress actuel?</Text>
        <View style={styles.sliderPlaceholder}>
          <Text style={styles.sliderText}>1 ━━━━━━━━━━ 10</Text>
          <Text style={styles.sliderValue}>Niveau: 6</Text>
        </View>
      </Card>

      <Card title="Habitudes">
        <Text style={styles.label}>Caféine</Text>
        <View style={styles.optionsPlaceholder}>
          <Text style={styles.optionText}>Aucune • Faible • Modérée • Élevée</Text>
        </View>
        
        <Text style={[styles.label, { marginTop: spacing.md }]}>Écrans le soir</Text>
        <View style={styles.optionsPlaceholder}>
          <Text style={styles.optionText}>Peu • Modéré • Beaucoup</Text>
        </View>
      </Card>

      <View style={styles.footer}>
        <Button
          title="Analyser mon profil"
          onPress={() => navigation.navigate('AIAnalysis')}
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
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  optionsPlaceholder: {
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 12,
    alignItems: 'center',
  },
  optionText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  sliderPlaceholder: {
    backgroundColor: colors.surface,
    padding: spacing.lg,
    borderRadius: 12,
    alignItems: 'center',
  },
  sliderText: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  sliderValue: {
    ...typography.h4,
    color: colors.primary,
  },
  footer: {
    marginTop: spacing.xl,
  },
});
