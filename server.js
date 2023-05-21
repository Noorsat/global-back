const express = require('express');
var cors = require('cors');
const routes = require('./routes');
const app = express();
const port = 4000;

app.use(express.json())
app.use(cors())
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});