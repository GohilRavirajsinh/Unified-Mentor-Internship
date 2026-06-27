const express = require('express')
const moongose = require('mongoose')
const urlRouter = require('./routes/urlRoutes')

const app = express();

app.set('view engine', 'ejs')

// Connect to MongoDB
moongose.connect('mongodb://localhost:27017/UnifiedMentor')
.then(() => {
    console.log('Database Connected Sucsessfully!');  
}).catch((err) => {
    console.log('Connection failed', err);
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', urlRouter);

const port = 2000;
app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
})