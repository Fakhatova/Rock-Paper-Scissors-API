const express = require('express')
const app = express();
const PORT = 8080;


app.use(express.json());


app.listen(
    PORT, () => console.log('API running')
);

app.get('/endpoint', (req, res) => {
        res.status(200).send({
            id: 1,
            name: 'unknown'
        })
});

app.post('/endpoint/:id', (req, res) => {
    const { id }  = req.params;
    const { name } = req.body;

    if(!name) {
        res.status(418).send({message: 'Missing logo for post request body'})
    }

    res.send({
        id: id,
        name: name
    })
});

