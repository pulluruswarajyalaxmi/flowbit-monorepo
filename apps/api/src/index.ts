import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'API running successfully' });
});

// Upload endpoint (mock)
app.post('/upload', (req, res) => {
  res.json({ fileId: '12345', fileName: 'demo.pdf' });
});

// Extract endpoint (mock)
app.post('/extract', (req, res) => {
  res.json({
    fileId: '12345',
    vendor: { name: 'Demo Vendor', address: '123 Street', taxId: 'GSTIN123' },
    invoice: {
      number: 'INV-001',
      date: '2025-09-08',
      currency: 'USD',
      subtotal: 90,
      taxPercent: 10,
      total: 100,
      lineItems: [
        { description: 'Product A', unitPrice: 30, quantity: 2, total: 60 },
        { description: 'Product B', unitPrice: 15, quantity: 2, total: 30 }
      ]
    },
    createdAt: new Date().toISOString()
  });
});

// Invoices CRUD (mock)
app.get('/invoices', (req, res) => {
  res.json([{ id: '1', vendor: { name: 'Demo Vendor' }, invoice: { number: 'INV-001' } }]);
});

app.listen(4000, () => {
  console.log('API running on http://localhost:4000');
});
