# API Documentation

## Base URL
```
Development: http://localhost:3000/api
Production: https://api.sleeppersona.app/api
```

## Authentication

All authenticated endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

## Endpoints

### Authentication

#### Register
```http
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123",
  "name": "John Doe"
}
```

Response:
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "email": "user@example.com",
      "name": "John Doe"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

#### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

Response: Same as register

### Users

#### Get User Profile
```http
GET /users/:userId
Authorization: Bearer <token>
```

Response:
```json
{
  "success": true,
  "data": {
    "id": "user_123",
    "email": "user@example.com",
    "name": "John Doe",
    "chronotype": "intermediate",
    "constraints": {
      "workSchedule": {
        "type": "fixed",
        "startTime": "09:00",
        "endTime": "17:00"
      },
      "hasChildren": false,
      "averageStressLevel": 6
    }
  }
}
```

#### Update User Profile
```http
PUT /users/:userId
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "John Updated",
  "chronotype": "early"
}
```

### Personas

#### Get Current Persona
```http
GET /personas/:userId
Authorization: Bearer <token>
```

Response:
```json
{
  "success": true,
  "data": {
    "id": "persona_123",
    "userId": "user_123",
    "primaryType": "stressed_insomniac",
    "traits": {
      "stressSensitivity": "high",
      "sleepDebtTolerance": "low",
      "consistencyLevel": "moderate",
      "circadianFlexibility": "moderate",
      "recoverySpeed": "moderate"
    },
    "adaptiveMode": "stress_protection",
    "riskFlags": [],
    "confidence": 85,
    "generatedAt": "2024-01-15T10:00:00Z",
    "validUntil": "2024-01-22T10:00:00Z"
  }
}
```

#### Generate Persona
```http
POST /personas/generate
Authorization: Bearer <token>
Content-Type: application/json

{
  "userId": "user_123",
  "onboardingData": {
    "sleepSchedule": {
      "typicalBedtime": "22:30",
      "typicalWakeTime": "07:00",
      "weekendDifference": false
    },
    "sleepQuality": {
      "difficultyFallingAsleep": true,
      "frequentAwakenings": false,
      "earlyWaking": false,
      "unrefreshed": true
    },
    "lifestyle": {
      "workSchedule": {
        "type": "fixed",
        "startTime": "09:00",
        "endTime": "17:00"
      },
      "stressLevel": 7,
      "exerciseFrequency": "occasional",
      "caffeineIntake": "moderate",
      "screenTime": "high"
    },
    "goals": ["improve_energy", "reduce_stress"],
    "challenges": ["difficulty_falling_asleep"]
  }
}
```

### Sleep Data

#### Get Sleep Entries
```http
GET /sleep-data/:userId?limit=30
Authorization: Bearer <token>
```

Response:
```json
{
  "success": true,
  "data": [
    {
      "id": "sleep_123",
      "userId": "user_123",
      "date": "2024-01-15",
      "bedtime": "2024-01-15T22:30:00Z",
      "wakeTime": "2024-01-16T07:00:00Z",
      "sleepDuration": 7.5,
      "awakenings": 1,
      "perceivedQuality": 8,
      "morningEnergy": 7,
      "calculatedScore": 82
    }
  ]
}
```

#### Create Sleep Entry
```http
POST /sleep-data
Authorization: Bearer <token>
Content-Type: application/json

{
  "userId": "user_123",
  "bedtime": "2024-01-15T22:30:00Z",
  "wakeTime": "2024-01-16T07:00:00Z",
  "awakenings": 1,
  "perceivedQuality": 8,
  "morningEnergy": 7,
  "eveningStress": 6
}
```

### Routines

#### Get Evening Routine
```http
GET /routines/:userId/evening
Authorization: Bearer <token>
```

Response:
```json
{
  "success": true,
  "data": {
    "id": "routine_123",
    "userId": "user_123",
    "type": "evening",
    "steps": [
      {
        "id": "step_1",
        "order": 1,
        "title": "Diminuer la lumière",
        "description": "Réduire l'éclairage 30 min avant le coucher",
        "duration": 5,
        "category": "environment",
        "intensity": "light",
        "completed": false,
        "icon": "💡"
      }
    ],
    "totalDuration": 30,
    "suggestedStartTime": "2024-01-15T22:00:00Z",
    "completionRate": 0
  }
}
```

#### Update Routine Step
```http
PUT /routines/:routineId/steps/:stepId
Authorization: Bearer <token>
Content-Type: application/json

{
  "completed": true
}
```

### Analytics

#### Get Sleep Metrics
```http
GET /analytics/:userId/metrics?days=7
Authorization: Bearer <token>
```

Response:
```json
{
  "success": true,
  "data": {
    "averageSleepDuration": 7.5,
    "averageQuality": 7.8,
    "averageEnergy": 7.2,
    "consistencyScore": 75,
    "sleepDebt": 2.5,
    "weeklyTrend": "improving"
  }
}
```

#### Get Patterns
```http
GET /analytics/:userId/patterns
Authorization: Bearer <token>
```

Response:
```json
{
  "success": true,
  "data": [
    {
      "type": "bedtime_consistency",
      "detected": true,
      "severity": "moderate",
      "description": "Votre heure de coucher varie de plus d'1h",
      "recommendation": "Essayez de maintenir une heure de coucher régulière"
    }
  ]
}
```

## Error Responses

All errors follow this format:
```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE"
}
```

Common error codes:
- `400`: Bad Request
- `401`: Unauthorized
- `404`: Not Found
- `500`: Internal Server Error

## Rate Limiting

- 100 requests per minute per IP
- 1000 requests per hour per user

## Pagination

For endpoints that return lists, use:
- `limit`: Number of items (default: 30, max: 100)
- `offset`: Starting position (default: 0)

Example:
```http
GET /sleep-data/:userId?limit=20&offset=40
```
