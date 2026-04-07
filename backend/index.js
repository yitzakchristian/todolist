require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running at port ${port}...`);
});