// Navigation Types for Sleep Persona App

export type RootStackParamList = {
  Onboarding: undefined;
  Main: undefined;
};

export type OnboardingStackParamList = {
  Welcome: undefined;
  SleepProfile: undefined;
  Objectives: undefined;
  Constraints: undefined;
  AIAnalysis: undefined;
  PersonaResult: undefined;
};

export type MainTabParamList = {
  HomeStack: undefined;
  MorningStack: undefined;
  InsightsStack: undefined;
  PersonaStack: undefined;
  SettingsStack: undefined;
};

export type HomeStackParamList = {
  Dashboard: undefined;
  EveningPlan: undefined;
  ActiveRoutine: { routineId: string };
  BedtimeReminder: undefined;
  NightMode: undefined;
};

export type MorningStackParamList = {
  MorningCheckin: undefined;
  EnergyRating: undefined;
  AIFeedback: undefined;
  SleepScore: undefined;
};

export type InsightsStackParamList = {
  History: undefined;
  Graphs: undefined;
  Progress: undefined;
  Patterns: undefined;
};

export type PersonaStackParamList = {
  CurrentPersona: undefined;
  Evolution: undefined;
  Adjustments: undefined;
  Coaching: undefined;
};

export type SettingsStackParamList = {
  Settings: undefined;
  Notifications: undefined;
  HealthConnect: undefined;
  Privacy: undefined;
  Subscription: undefined;
};
