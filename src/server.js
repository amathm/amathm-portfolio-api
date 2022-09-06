const express = require('express');

const app = express();

app.use(express.json());

app.get('/status', async (req, res) => {
  return res.status(200).json({ status: 'live' })
});

const port = 9000;
app.listen(port, () => console.log(`Listening on port ${port}`));
