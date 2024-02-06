const express = require('express');
const bodyParser = require('body-parser');
const authRouter = require('./routers/authRouter');
const vehicleRouter = require('./routers/vehicleRouter');
const challanRouter = require('./routers/challanRouter');
const insuranceRouter = require('./routers/insuranceRouter');
const repairRouter = require('./routers/repairRouter');
const dotenv = require('dotenv');
const app = express();

app.use(bodyParser.json());
dotenv.config();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/auth', authRouter);
app.use('/', vehicleRouter);
app.use('/', challanRouter);
app.use('/', insuranceRouter);
app.use('/', repairRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


