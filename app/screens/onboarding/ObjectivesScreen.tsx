import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import ScreenContainer from '../../components/ScreenContainer';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { colors, spacing, typography, borderRadius } from '../../theme';
import { OnboardingStackParamList } from '../../navigation/types';

type ObjectivesScreenNavigationProp = StackNavigationProp<OnboardingStackParamList, 'Objectives'>;

const OBJECTIVES = [
  { id: 'energy', label: 'Améliorer mon énergie', icon: '⚡' },
  { id: 'consistency', label: 'Régulariser mon sommeil', icon: '📅' },
  { id: 'stress', label: 'Réduire le stress', icon: '🧘' },
  { id: 'recovery', label: 'Mieux récupérer', icon: '💪' },
  { id: 'insomnia', label: 'Combattre l\'insomnie', icon: '😴' },
  { id: 'performance', label: 'Optimiser mes performances', icon: '🎯' },
];

export default function ObjectivesScreen() {
  const navigation = useNavigation<ObjectivesScreenNavigationProp>();
  const [selectedObjectives, setSelectedObjectives] = useState<string[]>([]);

  const toggleObjective = (id: string) => {
    setSelectedObjectives(prev =>
      prev.includes(id) ? prev.filter(o => o !== id) : [...prev, id]
    );
  };

  return (
    <ScreenContainer title="Vos Objectifs">
      <Text style={styles.question}>
        Quels sont vos objectifs principaux?
      </Text>
      <Text style={styles.hint}>
        Sélectionnez un ou plusieurs objectifs
      </Text>

      <View style={styles.objectivesGrid}>
        {OBJECTIVES.map(objective => {
          const isSelected = selectedObjectives.includes(objective.id);
          return (
            <TouchableOpacity
              key={objective.id}
              style={[styles.objectiveCard, isSelected && styles.selectedCard]}
              onPress={() => toggleObjective(objective.id)}
              activeOpacity={0.7}
            >
              <Text style={styles.icon}>{objective.icon}</Text>
              <Text style={[styles.label, isSelected && styles.selectedLabel]}>
                {objective.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.footer}>
        <Button
          title="Continuer"
          onPress={() => navigation.navigate('Constraints')}
          fullWidth
          disabled={selectedObjectives.length === 0}
        />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  question: {
    ...typography.h3,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  hint: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  objectivesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  objectiveCard: {
    width: '47%',
    backgroundColor: colors.backgroundCard,
    padding: spacing.lg,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedCard: {
    borderColor: colors.primary,
    backgroundColor: colors.surface,
  },
  icon: {
    fontSize: 32,
    marginBottom: spacing.sm,
  },
  label: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  selectedLabel: {
    color: colors.text,
    fontWeight: '600',
  },
  footer: {
    marginTop: spacing.xl,
  },
});
