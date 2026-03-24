require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    company: 'RA SOFT LLC',
    description: 'IT Staffing & Technology Solutions API',
    version: '1.0.0',
    endpoints: {
      health: 'GET /api/health',
      contact: 'POST /api/contact',
    },
    frontend: 'http://localhost:4200',
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', company: 'RA SOFT LLC', timestamp: new Date() });
});

app.post('/api/contact', (req, res) => {
  const { firstName, lastName, email, company, serviceArea, clearanceLevel, message } = req.body;
  if (!firstName || !email) {
    return res.status(400).json({ success: false, message: 'First name and email are required.' });
  }
  console.log('📥 New contact submission:', { firstName, lastName, email, company, serviceArea, clearanceLevel });
  res.json({ success: true, message: 'Request received. A specialist will respond within 1 business day.' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ RA SOFT LLC API running on http://localhost:${PORT}`));
