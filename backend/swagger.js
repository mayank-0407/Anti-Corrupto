const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'API Documentation',
  },
  host: 'localhost:3000',  // Adjust to your app's host
  schemes: ['http'],
};

const outputFile = './swagger-output.json';  // This is the generated file
const endpointsFiles = ['./index.js'];  // Your main app file

swaggerAutogen(outputFile, endpointsFiles).then(() => {
  require('./index');  // Automatically start app after generation
});
