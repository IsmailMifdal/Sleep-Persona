# Sleep Persona - AI Adaptive Sleep Coaching Platform

![Sleep Persona](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React Native](https://img.shields.io/badge/React%20Native-0.73-blue.svg)
![Expo](https://img.shields.io/badge/Expo-50.0-black.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)

## 📖 Overview

Sleep Persona est une plateforme d'optimisation du sommeil basée sur une IA adaptative qui analyse le comportement, le stress et les habitudes pour générer un coaching personnalisé en continu.

**L'objectif**: Décision comportementale quotidienne, pas seulement du tracking passif.

## 🎯 Target Users

### Primary
- Professionnels stressés
- Entrepreneurs
- Parents fatigués
- Travailleurs hybrides
- Personnes avec sommeil irrégulier

### Secondary
- Biohackers
- Sportifs
- Insomnie légère à modérée
- Utilisateurs de wearables

## ✨ Features (MVP)

### 1. Onboarding IA
- Collecte des horaires, contraintes, stress, habitudes
- Génération du Sleep Persona initial
- Recommandations immédiates

### 2. Dashboard Quotidien
- Affichage du persona actuel
- Score sommeil simplifié
- Plan du soir personnalisé
- Conseils du jour
- État de récupération

### 3. Plan du Soir Adaptatif
- Heure de coucher suggérée
- Routine personnalisée avec durée et intensité
- Activités proposées

### 4. Notifications Intelligentes
- Rappel coucher
- Préparation sommeil
- Réduction stimulation
- Alertes récupération

### 5. Morning Check-in
- Évaluation énergie
- Niveau de stress
- Réveils nocturnes
- Qualité perçue

### 6. Insights & Historique
- Progression
- Tendances
- Patterns détectés
- Évolution persona

### 7. Persona Dynamique
- Classification comportementale
- Mode adaptatif (Recovery, Stress Protection, Discipline Builder, etc.)
- Détection des risques

## 🏗 Architecture

```
Sleep-Persona/
├── app/                      # Mobile App (React Native/Expo)
│   ├── components/          # Reusable UI components
│   ├── navigation/          # Navigation configuration
│   ├── screens/            # Screen components
│   │   ├── onboarding/    # Onboarding flow
│   │   ├── home/          # Main dashboard & evening plan
│   │   ├── morning/       # Morning check-in
│   │   ├── insights/      # Analytics & history
│   │   ├── persona/       # Persona management
│   │   └── settings/      # Settings & preferences
│   ├── services/          # API & business logic
│   │   ├── api.ts         # API client
│   │   ├── ai.ts          # AI engine integration
│   │   └── notification.ts # Notification service
│   ├── theme/             # Design system
│   ├── types/             # TypeScript types
│   └── utils/             # Utility functions
│
├── backend/                 # Backend API (Node.js/Express)
│   └── src/
│       ├── api/            # API routes
│       │   ├── auth.ts
│       │   ├── users.ts
│       │   ├── personas.ts
│       │   ├── sleep-data.ts
│       │   ├── routines.ts
│       │   └── analytics.ts
│       ├── models/         # Database models
│       ├── services/       # Business logic
│       └── middleware/     # Express middleware
│
└── assets/                 # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Expo CLI: `npm install -g expo-cli`
- iOS Simulator (Mac) or Android Studio
- PostgreSQL (for backend)

### Mobile App Setup

1. **Install dependencies**
```bash
npm install
```

2. **Start the development server**
```bash
npm start
```

3. **Run on device/simulator**
```bash
# iOS
npm run ios

# Android
npm run android

# Web (for development)
npm run web
```

### Backend Setup

1. **Navigate to backend directory**
```bash
cd backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment**
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. **Start development server**
```bash
npm run dev
```

The API will be available at `http://localhost:3000`

## 📱 Navigation Structure

### Onboarding Stack
1. Welcome
2. Sleep Profile (horaires)
3. Objectives (objectifs)
4. Constraints (contraintes)
5. AI Analysis (analyse)
6. Persona Result (résultat)

### Main App (Bottom Tabs)
1. **Home Stack**
   - Dashboard
   - Evening Plan
   - Active Routine
   - Bedtime Reminder
   - Night Mode

2. **Morning Stack**
   - Morning Check-in
   - Energy Rating
   - AI Feedback
   - Sleep Score

3. **Insights Stack**
   - History
   - Graphs
   - Progress
   - Patterns

4. **Persona Stack**
   - Current Persona
   - Evolution
   - Adjustments
   - Coaching

5. **Settings Stack**
   - Settings
   - Notifications
   - Health Connect
   - Privacy
   - Subscription

## 🎨 Design System

### Colors
- **Primary**: Indigo (#6366F1)
- **Background**: Dark (#0F0F1E)
- **Success**: Green (#10B981)
- **Warning**: Orange (#F59E0B)
- **Danger**: Red (#EF4444)

### Persona Colors
- Disciplined Sleeper: Blue
- Stressed Insomniac: Red
- Irregular Sleeper: Orange
- Recovery Needed: Purple
- Sleep Deprived: Pink
- Optimal Sleeper: Green

## 🧠 AI Integration

### Gemini API
The app integrates with Google's Gemini AI for:
- Persona generation
- Routine personalization
- Pattern detection
- Behavioral recommendations

Configure your API key in `.env`:
```
GEMINI_API_KEY=your-api-key
```

## 📊 Data Models

### User
```typescript
{
  id: string
  chronotype: 'early' | 'intermediate' | 'late'
  constraints: UserConstraints
  objectives: string[]
  stressBaseline: number
}
```

### Persona
```typescript
{
  id: string
  primaryType: PersonaType
  traits: PersonaTraits
  adaptiveMode: AdaptiveMode
  riskFlags: string[]
  confidence: number
}
```

### SleepEntry
```typescript
{
  id: string
  bedtime: Date
  wakeTime: Date
  sleepDuration: number
  awakenings: number
  perceivedQuality: number
  morningEnergy: number
  calculatedScore: number
}
```

### Routine
```typescript
{
  id: string
  type: 'evening' | 'morning'
  steps: RoutineStep[]
  totalDuration: number
  suggestedStartTime: Date
  completionRate: number
}
```

## 🔐 Security & Privacy

- End-to-end encryption for health data
- RGPD/GDPR compliant
- Complete account deletion capability
- Local data storage with secure sync

## 📈 KPIs (MVP Goals)

- **Activation onboarding**: > 70%
- **Rétention J7**: > 35%
- **Routines complétées**: > 40%
- **Amélioration énergie subjective**: > 20%
- **Ouverture plan soir**: > 60%

## 🗺 Roadmap

### Phase 1 (Weeks 1-3)
- ✅ Infrastructure backend
- ✅ Navigation structure
- ✅ Data models

### Phase 2 (Weeks 4-6)
- ✅ Onboarding IA
- ✅ Dashboard
- ✅ Persona engine v1

### Phase 3 (Weeks 7-9)
- ⏳ Plan du soir
- ⏳ Check-in matin
- ⏳ Notifications

### Phase 4 (Weeks 10-12)
- ⏳ Insights & analytics
- ⏳ Polish UX
- ⏳ Beta testing

## 🧪 Testing

```bash
# Run tests
npm test

# Run linter
npm run lint
```

## 📝 License

Copyright © 2024 Sleep Persona

## 🤝 Contributing

This is a proprietary project. For collaboration inquiries, please contact the team.

## 📧 Support

For support and questions, please contact: support@sleeppersona.app

---

**Built with ❤️ for better sleep**