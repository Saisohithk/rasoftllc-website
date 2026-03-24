const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3003;

app.use(cors({ origin: ['http://localhost:3000', 'http://localhost:4200', 'http://localhost:4201'] }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    company: 'RA SOFT LLC',
    status: 'running',
    endpoints: {
      health: 'GET /api/health',
      contact: 'POST /api/contact',
    },
    frontend: 'http://localhost:4201',
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.post('/api/contact', (req, res) => {
  const { firstName, lastName, email, company, serviceArea, clearanceLevel, message } = req.body;

  if (!firstName || !email) {
    return res.status(400).json({ success: false, message: 'First name and email are required.' });
  }

  console.log('📥 Contact submission:', { firstName, lastName, email, company, serviceArea, clearanceLevel });

  res.json({
    success: true,
    message: 'Request received. A specialist will respond within 1 business day.',
  });
});

app.listen(PORT, () => {
  console.log(`✅ RA SOFT LLC API running at http://localhost:${PORT}`);
});
