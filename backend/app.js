const express = require('express');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employees');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(employeeRoutes);

app.listen(process.env.PORT , () => {
    console.log(`Server started on port ${process.env.PORT}`, `THIS ARE THE ENVS ${process.env.HOST, process.env.DB_PORT, process.env.USERNAME, process.env.PASSWORD, process.env.MAX, process.env.MIN, process.env.IDLE, process.env.ACQUIRE, process.env.DB_PORT}`);
});