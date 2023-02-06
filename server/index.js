const express = require('express');
const app = express();
const port = 5000;

// heyy
app.get('/', (req, res) => res.send('Hello World! from server'));

app.listen(port, () => console.log(`Listening on port ${port}!`));