const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
    console.log(`порт запущен на ${PORT}`)
})

app.get('/api', (req, res) => {
    res.json({
        massage: 'Hello from backend express.js'
    })
})
