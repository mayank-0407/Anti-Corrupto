const express = require('express');
const bodyParser = require('body-parser');
const authRouter = require('./routers/auth/authRouter');
const vehicleRouter = require('./routers/vehicle/vehicleRouter');
const challanRouter = require('./routers/vehicle/challanRouter');
const insuranceRouter = require('./routers/vehicle/insuranceRouter');
const repairRouter = require('./routers/vehicle/repairRouter');
const landRouter = require('./routers/land/landRouter');
const landInquiryRouter = require('./routers/land/landInquiryRouter');
const transferlandRouter = require('./routers/land/transferlandRouter');

const landcase = require('./routers/land/landcaseRouter');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

app.use(bodyParser.json());
dotenv.config();

const corsOptions ={
  origin:['http://localhost:5173'], 
  credentials:true,         
  optionSuccessStatus:200
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/auth', authRouter);
app.use('/vehicle', vehicleRouter);
app.use('/challan', challanRouter);
app.use('/', insuranceRouter);
app.use('/', repairRouter);
app.use('/land', landRouter);
app.use('/transferland', transferlandRouter);
app.use('/case', landcase);
app.use('/inquiry',landInquiryRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


