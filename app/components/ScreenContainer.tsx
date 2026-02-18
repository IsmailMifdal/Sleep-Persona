import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { colors, spacing, typography } from '../theme';

interface ScreenContainerProps {
  children: React.ReactNode;
  title?: string;
  scrollable?: boolean;
  showHeader?: boolean;
}

export default function ScreenContainer({ 
  children, 
  title, 
  scrollable = true,
  showHeader = true 
}: ScreenContainerProps) {
  const Content = scrollable ? ScrollView : View;
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      {showHeader && title && (
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
      <Content style={styles.content} contentContainerStyle={scrollable ? styles.scrollContent : undefined}>
        {children}
      </Content>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title: {
    ...typography.h2,
    color: colors.text,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.lg,
  },
});
