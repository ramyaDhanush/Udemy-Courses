const express = require('express');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(5000, ()=> console.log(`Server is running at ${port}`))