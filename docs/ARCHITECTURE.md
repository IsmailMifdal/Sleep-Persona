# Sleep Persona - Architecture Documentation

## System Architecture

### Overview
Sleep Persona is a full-stack mobile application with AI-powered sleep coaching capabilities.

## Components

### 1. Mobile Application (React Native/Expo)

#### Technology Stack
- **Framework**: React Native 0.73 with Expo 50
- **Language**: TypeScript 5.3
- **Navigation**: React Navigation (Stack + Bottom Tabs)
- **State Management**: React Context API (can be extended with Redux)
- **Styling**: StyleSheet with custom theme system
- **Storage**: AsyncStorage for local data
- **Notifications**: Expo Notifications

#### Key Modules

##### Navigation
- **Onboarding Stack**: Welcome → Profile → Objectives → Constraints → Analysis → Result
- **Main Tabs**: Home, Morning, Insights, Persona, Settings
- Each tab has its own stack navigator for deep navigation

##### Services
1. **API Service** (`app/services/api.ts`)
   - Handles all HTTP requests to backend
   - JWT authentication
   - Error handling and retries
   
2. **AI Service** (`app/services/ai.ts`)
   - Persona generation logic
   - Sleep score calculation
   - Pattern analysis
   - Future: Gemini API integration

3. **Notification Service** (`app/services/notification.ts`)
   - Schedule bedtime reminders
   - Morning check-in notifications
   - Routine start alerts
   - Permission handling

##### Data Flow
```
User Input → Screen → Service → API → Backend
                              ↓
                         Local Storage
                              ↓
                         State Update
                              ↓
                         UI Re-render
```

### 2. Backend API (Node.js/Express)

#### Technology Stack
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL (to be configured)
- **Authentication**: JWT
- **AI**: Gemini API integration (planned)

#### API Endpoints

##### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

##### User Management
- `GET /api/users/:userId` - Get user profile
- `PUT /api/users/:userId` - Update user profile

##### Persona
- `GET /api/personas/:userId` - Get current persona
- `POST /api/personas/generate` - Generate new persona from onboarding

##### Sleep Data
- `GET /api/sleep-data/:userId` - Get sleep entries
- `POST /api/sleep-data` - Create sleep entry

##### Routines
- `GET /api/routines/:userId/evening` - Get evening routine
- `PUT /api/routines/:routineId/steps/:stepId` - Update step progress

##### Analytics
- `GET /api/analytics/:userId/metrics` - Get sleep metrics
- `GET /api/analytics/:userId/patterns` - Get detected patterns

### 3. AI Engine

#### Persona Generation
Input:
- Sleep schedule
- Constraints (work, children, stress)
- Objectives
- Current sleep quality

Output:
- Primary persona type
- Behavioral traits
- Adaptive mode
- Risk flags
- Confidence score

#### Adaptive Modes
1. **Recovery Mode**: For sleep-deprived users
2. **Stress Protection**: High stress sensitivity
3. **Discipline Builder**: Irregular sleep patterns
4. **Circadian Reset**: Jet lag or shift work
5. **Burnout Prevention**: Early warning system
6. **Maintenance**: For optimal sleepers

#### Routine Personalization
Factors considered:
- Current persona
- Time available
- Stress level
- Historical effectiveness
- User preferences

### 4. Data Models

#### User
```typescript
interface User {
  id: string;
  email: string;
  chronotype: 'early' | 'intermediate' | 'late';
  constraints: UserConstraints;
  objectives: string[];
  stressBaseline: number;
}
```

#### Persona
```typescript
interface Persona {
  id: string;
  primaryType: PersonaType;
  traits: PersonaTraits;
  adaptiveMode: AdaptiveMode;
  riskFlags: string[];
  confidence: number;
  validUntil: Date;
}
```

#### SleepEntry
```typescript
interface SleepEntry {
  id: string;
  bedtime: Date;
  wakeTime: Date;
  sleepDuration: number;
  awakenings: number;
  perceivedQuality: number;
  morningEnergy: number;
  calculatedScore: number;
}
```

## Security Considerations

### Authentication
- JWT tokens with 7-day expiration
- Secure token storage in AsyncStorage
- Token refresh mechanism (to be implemented)

### Data Privacy
- RGPD/GDPR compliance
- Encrypted health data
- User data deletion capability
- No third-party data sharing

### API Security
- Helmet.js for HTTP headers
- CORS configuration
- Rate limiting (to be added)
- Input validation with Joi

## Performance Optimization

### Mobile App
- Lazy loading of screens
- Image optimization
- Memoization of expensive computations
- Efficient re-renders with React.memo

### Backend
- Database indexing
- Query optimization
- Caching layer (to be added)
- Connection pooling

## Deployment Strategy

### Mobile App
1. Development: Expo Go
2. Testing: TestFlight (iOS) / Internal Testing (Android)
3. Production: App Store / Google Play

### Backend
1. Development: Local server
2. Staging: Cloud instance (e.g., Railway, Render)
3. Production: Scalable cloud (e.g., AWS, GCP)

### Database
1. Development: Local PostgreSQL
2. Production: Managed database (e.g., Supabase, AWS RDS)

## Monitoring & Analytics

### App Analytics
- User journey tracking
- Feature usage metrics
- Crash reporting (to be added with Sentry)
- Performance monitoring

### Backend Monitoring
- API response times
- Error rates
- Database performance
- Server health

## Future Enhancements

### Phase 2
- Wearable integration (Apple Health, Google Fit)
- Social features (optional sharing)
- Advanced AI recommendations
- Voice coaching

### Phase 3
- Premium subscription model
- Sleep coaching sessions
- Community features
- Export data functionality

## Development Guidelines

### Code Style
- TypeScript strict mode
- ESLint for linting
- Prettier for formatting
- Conventional commits

### Testing
- Unit tests with Jest
- Integration tests for API
- E2E tests (to be added)
- Manual QA checklist

### Git Workflow
- Feature branches
- Pull request reviews
- CI/CD pipeline (to be configured)
- Semantic versioning
