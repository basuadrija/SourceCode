const express = require('express');
const router = express.Router();

let patients = [
  { id: '1', name: 'John Doe', age: 30, condition: 'Healthy' },
  { id: '2', name: 'Jane Smith', age: 45, condition: 'Hypertension' }
];

router.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', service: 'Patient Service' });
});

router.get('/', (req, res) => {
  res.json({
    message: 'Patients retrieved successfully',
    count: patients.length,
    patients: patients
  });
});

router.get('/:id', (req, res) => {
  const patient = patients.find(p => p.id === req.params.id);
  if (patient) {
    res.json({ message: 'Patient found', patient: patient });
  } else {
    res.status(404).json({ error: 'Patient not found' });
  }
});

router.post('/', (req, res) => {
  const { name, age, condition } = req.body;
  if (!name || !age) {
    return res.status(400).json({ error: 'Name and age are required' });
  }
  const newPatient = {
    id: (patients.length + 1).toString(),
    name,
    age,
    condition: condition || 'Not specified'
  };
  patients.push(newPatient);
  res.status(201).json({ message: 'Patient added successfully', patient: newPatient });
});

module.exports = router;
