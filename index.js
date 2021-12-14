const express = require('express')
const app = express();
// const cors = require('cors');
// const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;

// app.use(cors());
app.use(express.json());// midleware to apply for request 
// app.use(bodyParser.urlencoded({ extended: false }));
const players = [
    // {
    //     id:
    //     userName,
    //     password,
    //     wins, 
    //     losts,
    // }
]
app.locals = {
    title: 'Rock-Paper-Scissors API',
    players,
}



app.listen(
    PORT, () => console.log(`App listening on http://localhost:${PORT}`)
);

// app.get('/', (req,res) => {
//     res.send('Hello, and welcome... Please add endpoint /players  - to your URL to be able request data from this API')
// })

app.get('/players', (req, res) => {
    const { players } = app.locals;
        res.status(200).send( {players} );
});

app.get('/players/:id', (req, res) => {
    const { id }  = req.params;
    const { players } = app.locals;
    const match = players.filter(player => player.id == id);

    if (!match) return res.status(404).send({message: `No player found with an id of ${id}`});

    return res.status(200).send(match)
});

app.post('/players/new', (req, res) => {
    const { userName, password, wins, losts }= req.body;
    const requiredProperties = ['userName', 'password', 'wins', 'losts'];
    const newId = String(Date.now());

    for (let requiredParameter of requiredProperties) {
        if (req.body[requiredParameter] === undefined) {
        return res.status(422).json({
            message: `You are missing a required parameter of ${requiredParameter}`
        });
        }
    }

    const newPlay = {
        id : newId,
        userName,
        password,
        wins,
        losts,
    }


    const match = app.locals.players.find(player => {

    if(player.id === newPlay.id) {
        return res.status(422).send({message: `User with id  ${newPlay.id} is already registered`})
    }
    
    })

    
    res.status(201).send(newPlay)
});

app.patch('/players/:id', (req, res) => {
    const {id} = req.params
    const {wins, losts} = req.body;

    const matchUpdate = app.locals.players.find(player => player.id == id)

    if(matchUpdate.wins !== wins) {
        matchUpdate.wins = wins
    }else if(matchUpdate.losts !== losts) {
        matchUpdate.losts = losts 
    }

    res.send(matchUpdate); // Returns modified information back to user
})