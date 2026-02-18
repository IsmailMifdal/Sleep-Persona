import { Router, Request, Response } from 'express';

const router = Router();

// Mock authentication endpoints
router.post('/register', async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  
  // TODO: Implement actual registration logic
  res.json({
    success: true,
    data: {
      user: { id: '1', email, name },
      token: 'mock-jwt-token'
    }
  });
});

router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  
  // TODO: Implement actual login logic
  res.json({
    success: true,
    data: {
      user: { id: '1', email },
      token: 'mock-jwt-token'
    }
  });
});

export default router;
