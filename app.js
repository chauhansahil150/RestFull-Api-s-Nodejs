
require('dotenv').config();
const express = require('express');
const mongoose =require('mongoose');
//routes
const userRoute = require('./routes/userRoute');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));
const app = express();
const port = process.env.PORT || 3000;

app.use('/api', userRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});