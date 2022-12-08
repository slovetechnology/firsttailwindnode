const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoRouter = require('./routes/todoroute')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, () => {
    console.log('Mongodb Connected')
})

app.use(cors({
    origin: ['https://firsttailwind.onrender.com']
}))
app.use(express.json())
app.use('/api/todo', TodoRouter)

app.listen(port, () => console.log(`App running at port:${port}`))