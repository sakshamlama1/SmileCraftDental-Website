import express from 'express';
import cors from 'cors';  
import dotenv from 'dotenv';
import contactController from './controllers/contactController.js';

dotenv.config();

const app = express();

// --- Body Parsing ---
app.use(express.json());

// --- CORS Setup ---
// Only allow your front-end domain to communicate with this backend
app.use(cors());

// --- Routes ---
app.post('/get-in-touch-contact', contactController.handleGetInTouchContact);
app.post('/price-list-form', contactController.handlePriceListForm);

// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Graceful shutdown handling
process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server terminated gracefully.');
  });
});
