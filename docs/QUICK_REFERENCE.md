# Sleep Persona - Quick Reference

## 🎯 Project Summary

Sleep Persona is a complete AI-powered sleep coaching mobile application built with:
- **Frontend**: React Native + Expo + TypeScript
- **Backend**: Node.js + Express + TypeScript
- **AI**: Gemini API integration (ready)
- **Database**: PostgreSQL (to be configured)

## 📂 Project Structure (63 files)

```
Sleep-Persona/
├── Mobile App (React Native/Expo)
│   ├── 6 Onboarding screens
│   ├── 5 Home/Dashboard screens
│   ├── 4 Morning check-in screens
│   ├── 4 Insights/Analytics screens
│   ├── 4 Persona management screens
│   ├── 5 Settings screens
│   ├── 3 Reusable components (Button, Card, ScreenContainer)
│   ├── 7 Navigation stacks
│   └── 3 Services (API, AI, Notifications)
│
├── Backend API (Node.js/Express)
│   ├── 6 API route handlers
│   ├── Authentication (JWT)
│   ├── User management
│   ├── Persona generation
│   ├── Sleep data tracking
│   ├── Routine management
│   └── Analytics & patterns
│
└── Documentation
    ├── README.md (Main documentation)
    ├── SETUP.md (Installation guide)
    ├── API.md (API documentation)
    └── ARCHITECTURE.md (System architecture)
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
# Root (Mobile app)
npm install

# Backend
cd backend && npm install
```

### 2. Start Development
```bash
# Terminal 1: Mobile app
npm start

# Terminal 2: Backend API
cd backend && npm run dev
```

### 3. Open App
- Press `i` for iOS simulator
- Press `a` for Android emulator
- Scan QR code with Expo Go app on physical device

## 📱 Main Features Implemented

### ✅ Complete Navigation Structure
- Onboarding flow (6 screens)
- Bottom tab navigation (5 tabs)
- Stack navigation within each tab
- Type-safe navigation with TypeScript

### ✅ Screen Components (28 screens)
All screens created with:
- Consistent styling
- Dark theme
- Navigation integration
- TypeScript types

### ✅ Core Services
1. **API Service**: HTTP client with JWT auth
2. **AI Service**: Persona generation, scoring, recommendations
3. **Notification Service**: Push notifications with Expo

### ✅ Design System
- Color palette (dark theme)
- Typography system
- Component library
- Consistent spacing & shadows

### ✅ Data Models
- User, Persona, SleepEntry, Routine
- Complete TypeScript interfaces
- 7 persona types
- 5 adaptive modes

### ✅ Backend API
- 6 endpoint groups
- JWT authentication
- RESTful architecture
- Mock data for development

## 🎨 Key Screens

### Onboarding Flow
1. **Welcome** → 2. **Sleep Profile** → 3. **Objectives** → 
4. **Constraints** → 5. **AI Analysis** → 6. **Persona Result**

### Main App
- **Dashboard**: Score, persona, evening plan, advice
- **Evening Plan**: Personalized routine with steps
- **Morning Check-in**: Quality, energy, stress evaluation
- **Sleep Score**: Detailed analysis with metrics
- **Current Persona**: Profile with traits and mode

## 🧠 AI Integration Points

### Gemini API Ready For:
1. **Persona Generation**: Analyze onboarding data
2. **Evening Routines**: Personalized steps
3. **Daily Recommendations**: Context-aware advice
4. **Pattern Detection**: Sleep behavior analysis
5. **Score Calculation**: Multi-factor evaluation

### Configuration
Set `GEMINI_API_KEY` in environment variables:
```bash
# Mobile: .env
EXPO_PUBLIC_GEMINI_API_KEY=your-key

# Backend: backend/.env
GEMINI_API_KEY=your-key
```

## 📊 Data Flow

```
User Input → Screen → Service → API → Backend
                        ↓
                  Local Storage
                        ↓
                   State Update
                        ↓
                   UI Re-render
```

## 🔧 Development Tips

### Hot Reload
- Shake device or press `Cmd+D` (iOS) / `Cmd+M` (Android)
- Press `R` to reload
- Changes auto-reload in Expo

### Debugging
- Open Chrome DevTools: Press `j` in Expo CLI
- React DevTools: `npm install -g react-devtools && react-devtools`
- Network inspector: Enable in Expo menu

### Testing API
```bash
# Health check
curl http://localhost:3000/health

# Register user
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"test123","name":"Test User"}'

# Get persona
curl http://localhost:3000/api/personas/user_123 \
  -H "Authorization: Bearer <token>"
```

## 📋 Next Steps

### Phase 1: Foundation ✅ DONE
- [x] Project structure
- [x] Navigation
- [x] All screens
- [x] Services
- [x] Data models

### Phase 2: Integration 🔄 NEXT
- [ ] Connect mobile app to backend API
- [ ] Implement Gemini AI integration
- [ ] Add database with PostgreSQL
- [ ] Complete authentication flow
- [ ] State management (Context/Redux)

### Phase 3: Features 📋 TODO
- [ ] Functional onboarding with AI
- [ ] Real-time routine tracking
- [ ] Morning check-in with scoring
- [ ] Insights with charts
- [ ] Push notifications
- [ ] Offline support

### Phase 4: Polish 🎨 TODO
- [ ] UI animations
- [ ] Error handling
- [ ] Loading states
- [ ] Empty states
- [ ] Accessibility
- [ ] Performance optimization

### Phase 5: Production 🚀 TODO
- [ ] Testing (unit, integration, e2e)
- [ ] Production builds
- [ ] App Store submission
- [ ] Analytics integration
- [ ] Crash reporting
- [ ] Backend deployment

## 🎯 MVP Goals (KPIs)

Track these metrics:
- Onboarding completion: >70%
- Day 7 retention: >35%
- Routines completed: >40%
- Energy improvement: >20%
- Evening plan opens: >60%

## 📚 Resources

### Documentation
- `README.md`: Overview and features
- `docs/SETUP.md`: Installation guide
- `docs/API.md`: API documentation
- `docs/ARCHITECTURE.md`: System design

### External
- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Google Gemini AI](https://ai.google.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🛠 Useful Commands

```bash
# Development
npm start              # Start Expo
npm run ios           # iOS simulator
npm run android       # Android emulator
npm run web           # Web browser

# Backend
cd backend
npm run dev           # Development server
npm run build         # Build TypeScript
npm start             # Production server

# Utilities
npx expo start --clear    # Clear cache
npx expo doctor          # Check setup
npm run lint             # Run linter
```

## 💡 Pro Tips

1. **Use TypeScript**: All types are defined, use them!
2. **Component Reuse**: Extend base components for consistency
3. **Theme System**: Use theme colors/spacing, not hardcoded values
4. **Navigation Types**: Type-safe navigation prevents bugs
5. **Services**: Keep business logic in services, not screens
6. **Error Handling**: Always handle API errors gracefully
7. **Loading States**: Show loading indicators for async operations

## 🐛 Common Issues

| Issue | Solution |
|-------|----------|
| Metro bundler error | `expo start -c` |
| Port in use | `lsof -i :3000` then `kill -9 <PID>` |
| Dependency issues | Delete `node_modules`, run `npm install` |
| iOS build fails | Clear Xcode derived data |
| Android build fails | `cd android && ./gradlew clean` |
| Database error | Check PostgreSQL running and credentials |

## 📞 Support

- GitHub Issues: Report bugs and request features
- Documentation: Check `docs/` folder first
- Code Review: All PRs should be reviewed

---

**Version**: 1.0.0  
**Created**: 2024  
**Stack**: React Native + Expo + Node.js + PostgreSQL + Gemini AI  
**Status**: MVP Structure Complete ✅
