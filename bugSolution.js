const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  try {
    const user = req.body;
    if (!user || Object.keys(user).length === 0) {
      return res.status(400).json({ error: 'Request body is empty' });
    }
    console.log('New user:', user);
    res.status(201).send();
  } catch (error) {
    console.error('Error parsing JSON:', error);
    res.status(400).json({ error: 'Invalid JSON format' });
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));