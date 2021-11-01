const express = require('express');

// create express app 
const app = express();

// setup the server port 
const port = process.env.PORT || 5000;

// import employee routes 
const employeeRoutes = require('./src/routes/employee.route');

// create employee routes
app.use('/api/v1/employee',employeeRoutes);

// define root route
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () =>{
    console.log(`Express is running at port ${port}`);
});