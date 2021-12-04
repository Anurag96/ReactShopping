const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || '2000';

// React build output folder
app.use(express.static(path.join(__dirname, 'build')))

// Send all other requests to the React app
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
})


app.listen(port)