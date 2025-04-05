require('dotenv').config()
const express = require("express");
const cors = require("cors");
const db = require('./config/database');
const app = express();


//cors 
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to the Express & PostgreSQL API");
});

// Test Database Connection
db.authenticate()
    .then(() => console.log('Database Connetned...'))
    .catch((err) => console.error('Error', err));


//Routes
const userRoutes = require('./routes/userRoutes');
app.use('api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

const User = require('./models/User');
db.sync()
    .then(() => console.log('Database synchronized'))
    .catch(err => console.error('Error syncing database:', err));
