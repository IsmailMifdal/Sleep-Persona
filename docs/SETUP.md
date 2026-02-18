# Setup Guide - Sleep Persona

## Prerequisites Installation

### Required Software

1. **Node.js and npm**
   ```bash
   # Download from https://nodejs.org/ (LTS version recommended)
   # Or using Homebrew (Mac)
   brew install node
   
   # Verify installation
   node --version  # Should be 18.x or higher
   npm --version
   ```

2. **Expo CLI**
   ```bash
   npm install -g expo-cli
   ```

3. **Git**
   ```bash
   # Verify Git is installed
   git --version
   ```

4. **Code Editor**
   - Recommended: Visual Studio Code
   - Install extensions:
     - React Native Tools
     - ESLint
     - Prettier
     - TypeScript and JavaScript Language Features

### For iOS Development (Mac only)
- Xcode from Mac App Store
- Xcode Command Line Tools:
  ```bash
  xcode-select --install
  ```

### For Android Development
- Android Studio
- Configure Android SDK and emulator
- Set ANDROID_HOME environment variable

## Project Setup

### 1. Clone the Repository
```bash
git clone https://github.com/IsmailMifdal/Sleep-Persona.git
cd Sleep-Persona
```

### 2. Mobile App Setup

#### Install Dependencies
```bash
npm install
```

This will install all required packages including:
- expo
- react-native
- react-navigation
- typescript
- and all other dependencies

#### Start Development Server
```bash
npm start
# or
expo start
```

This will open the Expo Developer Tools in your browser.

#### Run on Device

**iOS Simulator (Mac only):**
```bash
npm run ios
# or press 'i' in the Expo CLI
```

**Android Emulator:**
```bash
npm run android
# or press 'a' in the Expo CLI
```

**Physical Device:**
1. Install Expo Go app from App Store/Play Store
2. Scan the QR code shown in terminal or browser
3. App will load on your device

### 3. Backend Setup

#### Navigate to Backend Directory
```bash
cd backend
```

#### Install Backend Dependencies
```bash
npm install
```

#### Configure Environment Variables
```bash
cp .env.example .env
```

Edit `.env` file with your configuration:
```env
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/sleep_persona
JWT_SECRET=your-secret-key-here
GEMINI_API_KEY=your-gemini-api-key
```

#### Setup PostgreSQL Database

**Using Docker:**
```bash
docker run --name sleep-persona-db \
  -e POSTGRES_USER=sleepuser \
  -e POSTGRES_PASSWORD=sleeppass \
  -e POSTGRES_DB=sleep_persona \
  -p 5432:5432 \
  -d postgres:15
```

**Or install PostgreSQL locally:**
- Mac: `brew install postgresql`
- Ubuntu: `sudo apt-get install postgresql`
- Windows: Download from postgresql.org

Create database:
```bash
psql -U postgres
CREATE DATABASE sleep_persona;
CREATE USER sleepuser WITH PASSWORD 'sleeppass';
GRANT ALL PRIVILEGES ON DATABASE sleep_persona TO sleepuser;
```

#### Start Backend Server
```bash
npm run dev
```

The API will be available at `http://localhost:3000`

Verify it's running:
```bash
curl http://localhost:3000/health
```

Should return:
```json
{"status":"ok","timestamp":"2024-01-15T10:00:00.000Z"}
```

## Development Workflow

### Mobile App Development

1. **Start Expo server**
   ```bash
   npm start
   ```

2. **Make changes to code**
   - Screens: `app/screens/`
   - Components: `app/components/`
   - Services: `app/services/`
   - Navigation: `app/navigation/`

3. **Hot reload**
   - Changes automatically reload in the app
   - Press 'r' to reload manually
   - Press 'Shift + r' for full reload

4. **Debugging**
   - Press 'd' to open debug menu
   - Use React Developer Tools
   - Console logs appear in terminal

### Backend Development

1. **Start development server**
   ```bash
   cd backend
   npm run dev
   ```

2. **Make changes**
   - API routes: `src/api/`
   - Models: `src/models/`
   - Services: `src/services/`

3. **Auto-restart**
   - Server automatically restarts on file changes (ts-node-dev)

4. **Test API endpoints**
   - Use Postman, Insomnia, or curl
   - API documentation: `docs/API.md`

## Environment Configuration

### Mobile App Environment Variables

Create `.env` file in root:
```env
EXPO_PUBLIC_API_URL=http://localhost:3000/api
EXPO_PUBLIC_GEMINI_API_KEY=your-api-key
```

Access in code:
```typescript
const apiUrl = process.env.EXPO_PUBLIC_API_URL;
```

### Backend Environment Variables

Already configured in `backend/.env`:
- `NODE_ENV`: development/production
- `PORT`: Server port (default: 3000)
- `DATABASE_URL`: PostgreSQL connection string
- `JWT_SECRET`: Secret for JWT tokens
- `GEMINI_API_KEY`: Google Gemini AI API key

## Testing

### Run Tests (when implemented)
```bash
# Mobile app tests
npm test

# Backend tests
cd backend
npm test
```

### Linting
```bash
# Mobile app
npm run lint

# Backend
cd backend
npm run lint
```

## Building for Production

### Mobile App

#### iOS
```bash
# Build for App Store
expo build:ios

# Or using EAS Build (recommended)
npm install -g eas-cli
eas build --platform ios
```

#### Android
```bash
# Build APK
expo build:android

# Or using EAS Build
eas build --platform android
```

### Backend

#### Build TypeScript
```bash
cd backend
npm run build
```

This creates compiled JavaScript in `backend/dist/`

#### Start Production Server
```bash
npm start
```

## Troubleshooting

### Common Issues

**1. Metro bundler error**
```bash
# Clear cache
expo start -c
# or
npx expo start --clear
```

**2. iOS build fails**
```bash
# Clear Xcode derived data
rm -rf ~/Library/Developer/Xcode/DerivedData
```

**3. Android build fails**
```bash
# Clear gradle cache
cd android
./gradlew clean
```

**4. Database connection error**
- Check PostgreSQL is running
- Verify DATABASE_URL in .env
- Check database exists and user has permissions

**5. Port already in use**
```bash
# Find process using port 3000
lsof -i :3000
# Kill the process
kill -9 <PID>
```

**6. Dependencies issues**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

1. ✅ Setup completed
2. 📱 Run the mobile app
3. 🔧 Configure Gemini API key
4. 🗄️ Setup database
5. 🚀 Start building features!

## Getting Help

- 📖 Check documentation in `docs/` folder
- 🐛 Open an issue on GitHub
- 💬 Contact the development team

## Useful Commands

```bash
# Mobile App
npm start              # Start Expo server
npm run ios           # Run on iOS simulator
npm run android       # Run on Android emulator
npm run lint          # Run linter
npm test              # Run tests

# Backend
cd backend
npm run dev           # Start dev server
npm run build         # Build TypeScript
npm start             # Start production server
npm run lint          # Run linter
npm test              # Run tests
```

## Project Structure Reference

```
Sleep-Persona/
├── app/                    # Mobile app source
│   ├── components/        # Reusable components
│   ├── navigation/        # Navigation config
│   ├── screens/          # Screen components
│   ├── services/         # API & business logic
│   ├── theme/            # Design system
│   └── types/            # TypeScript types
├── backend/               # Backend API
│   └── src/
│       ├── api/          # Routes
│       ├── models/       # DB models
│       └── services/     # Business logic
├── docs/                  # Documentation
├── assets/               # Static assets
└── App.tsx               # App entry point
```

Happy coding! 🚀
