const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sequelize = require('./util/database');
const userRoutes = require('./routes/user');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.userRoutes = require('./models/user');
app.use(cors());
app.use(bodyParser.json({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'user.html'));
});

sequelize.sync()
    .then(result => {
        //console.log(result);
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })
