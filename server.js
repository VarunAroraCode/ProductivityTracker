const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;

app.use(express.static('public'));
app.get('/data', (req, res) => {
  const bpi = 'bpi';
    data = "VARUN VARUN VARUN"
  axios.get()
    .then(response => res.send(response.data))
    .catch(error => console.log(error))
})
app.listen(port, () => console.log(`listening on port ${port}!`));


