import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api', (req: Request, res: Response) => {
  res.json({ message: 'Good News Everyone! It looks like the API works like it should' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
