

const { response } = require('express');
const express = require('express');
const { readFile } = require('fs');
const app = express();

app.get('/', (request, response) => {

    readFile('./index.html', 'utf-8', (err,html) => {

        if (err) {
            response.status(500).send('sorry, out of order')
        }

        response.send(html);
    })

});

app.get('/', (request, response) => {

    readFile('../pages/aboutme.html', 'utf-8', (err,html) => {

        if (err) {
            response.status(500).send('sorry, out of order')
        }

        response.send(html);
    })

});

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'));