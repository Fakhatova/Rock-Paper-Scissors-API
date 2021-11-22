const app = require('express')();
const PORT = 8080;

app.listen(
    PORT, () => console.log('API running')
);

app.get('/endpoint', (req, res) => {
        res.status(200).send({
            id:Date.now().toString(),
            name: 'unknown'
        })
});

app.post('/tshirt/:id', (req, res) => {
    const { id }  = req.params;
    const { logo } = req.body;
});
