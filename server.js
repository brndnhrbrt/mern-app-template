const express = require('express');
const path = require('path');
const connectDB = require('./config/db')

//init app
const app = express();

//connects to database
connectDB();

//init middleware
app.use(express.json({ extended: false }));

//init api routes
require('./routes/router')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

//start server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server up on port ${PORT}`));

