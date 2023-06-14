const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const hostname = '0.0.0.0'
const port = 3000;




// defining the Express app
const app = express();
app.use(bodyParser.json());



// defining an endpoint to return all ads
app.post('/notify', (req, res) => {
    console.log("payload received", req.body)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.send({ "message": 'Success' })
});


// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     res.end('Success')
// })

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})