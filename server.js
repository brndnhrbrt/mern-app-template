const express = require('express');
const connectDB = require('./config/db')

//init app
const app = express();

//connects to database
connectDB();

//init middleware(code that goes in the middle xD)
app.use(express.json({ extended: false }));

//init api routes
app.get('/', (req, res) => {
    res.send('API Running');
});

require('./routes/router')(app);

//start server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server up on port ${PORT}`));

