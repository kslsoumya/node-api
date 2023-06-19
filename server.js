const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const port = 8080;




// defining the Express app
const app = express();
app.use(bodyParser.json());


app.get('/test', (req, res) => {
    // console.log("payload received", req.body)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json('Api is working')
});


// defining an endpoint to return all ads
app.post('/notify', (req, res) => {
    console.log("payload received", req.body)
    console.log("changed Items", req.body?.changedItems)
    console.log("Effects", req.body?.changedItems?.effects)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.send({ "message": 'Success' })
});


// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     res.end('Success')
// })

app.listen(port, () => {
    console.log(`Server running at ${port}/`)
})