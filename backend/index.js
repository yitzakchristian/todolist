require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB Connected..'))
    .catch((err) => console.log('MongoDB Connection failed!'))

app.use(express.json());

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running at port ${port}...`);
});