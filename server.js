const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require("dotenv");
const mongoose = require("mongoose");


const path = require('path');
dotenv.config({ path: './config.env' });
require('./db/conn');
app.use(express.json());
const cookieParser = require('cookie-parser');
app.use(cookieParser());



const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};
app.use(cors(corsOptions));

// ROUTES
app.use(require('./router/adminauth'));

app.use(require('./router/courseauth'));

app.use(require('./router/homeauth'));









const port = process.env.PORT||3002;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
