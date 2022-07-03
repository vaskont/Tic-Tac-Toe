const express = require('express');
const cors = require('cors');
const app = express();

let loginResult = true;

app.use(express.json());
app.use(cors());

app.listen(8080, () => {
    console.log('Listening on port 8080...');
});

app.get('/login', (req, res) => {
    loginResult = !loginResult;
    res.send({ loginResult });
});

app.post('/', (req, res) => {
    console.log('I got a request!');
    console.log(req.body);
    res.json({
        status: 'success',
    });
});