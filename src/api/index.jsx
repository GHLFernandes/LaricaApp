const express = require('express');
const app = express();

const PORT = process.env.PORT || 8877;

app.get('/', (req, resp) => {
    resp.json({
        mensagem: 'ok'
    })
})

app.listen(PORT, () => {
    console.log('Rodando na porta: ' + PORT);
})