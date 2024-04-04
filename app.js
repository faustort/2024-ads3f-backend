const express = require('express');
const db = require('./database');

const app = express();
app.use(express.json());

app.get('/test', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM aluguel');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao consultar o banco de dados');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
