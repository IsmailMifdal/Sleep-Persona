import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenContainer from '../../components/ScreenContainer';
import Card from '../../components/Card';
import { colors, spacing, typography, borderRadius } from '../../theme';

export default function SettingsScreen() {
  const navigation = useNavigation();

  const settingsOptions = [
    { id: 'notifications', title: 'Notifications', icon: '🔔', screen: 'Notifications' },
    { id: 'health', title: 'Santé Connectée', icon: '⌚', screen: 'HealthConnect' },
    { id: 'privacy', title: 'Confidentialité', icon: '🔒', screen: 'Privacy' },
    { id: 'subscription', title: 'Abonnement', icon: '💎', screen: 'Subscription' },
  ];

  return (
    <ScreenContainer title="Paramètres">
      <Card>
        {settingsOptions.map((option, index) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.option,
              index !== settingsOptions.length - 1 && styles.optionBorder
            ]}
            onPress={() => navigation.navigate(option.screen)}
          >
            <View style={styles.optionLeft}>
              <Text style={styles.optionIcon}>{option.icon}</Text>
              <Text style={styles.optionTitle}>{option.title}</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}
      </Card>

      <Card title="Informations">
        <Text style={styles.info}>Version: 1.0.0</Text>
        <Text style={styles.info}>Sleep Persona © 2024</Text>
      </Card>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  optionBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  optionIcon: {
    fontSize: 24,
  },
  optionTitle: {
    ...typography.body,
    color: colors.text,
  },
  arrow: {
    ...typography.h3,
    color: colors.textTertiary,
  },
  info: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.xs,
  },
});
