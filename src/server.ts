import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    console.log('listagem de usuários')
    return res.json([
        'Diego',
        'Felipe',
        'Fernando',
        'Roberto',
    ])
});

app.post('/users', (req, res) => {
    const user = {
        name: "Felipe",
        email: "Felipe@felipe.com"
    };

    return res.json(user);
});

app.listen(3333);