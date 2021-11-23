const express = require('express')
const app = express();
const PORT = 8080;


app.use(express.json());// midleware to apply for request 

app.locals.players = [
    {
    "id": 1,
    "name": "corona",
    "wins": 1,
    "losts": 0
}
]

app.listen(
    PORT, () => console.log('API running')
);

app.get('/players', (req, res) => {
        res.status(200).send(app.locals.players);
});

app.get('/players/:id', (req, res) => {
    const { id }  = req.params;
    const match = app.locals.players.find(idea => idea.id == id);

    if (!match) return res.status(404).send({message: `No idea found with an id of ${id}`});

    res.status(200).send(match)
});

app.post('/players', (req, res) => {
    const newPlay  = req.body;

    if(!newPlay) {
        res.status(422).send({message: 'Missing required parameter'})
    }

    app.locals.players = [ ...app.locals.players, newPlay]

    res.status(201).send(req.body)
});

