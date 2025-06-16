const express = require('express');
const app = express();

const appointmentService = require('./appointment-service');
const patientService = require('./patient-service');

app.use(express.json());

// Mount both services under their respective base paths
app.use('/appointments', appointmentService);
app.use('/patients', patientService);

// Root health check for entire service
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', service: 'Healthcare API' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Healthcare service running on port ${PORT}`);
});
