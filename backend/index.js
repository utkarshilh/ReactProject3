
const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')


connectToMongo();
const app = express()
const port = 5000;

app.use(cors())
app.use(express.json());



//Availabe Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get('/', (req, res) => {
    res.send('hello harry')
})
app.listen(port, () => {
    console.log(`iNoteBook backend listening at http://localhost:${port}`)
})
