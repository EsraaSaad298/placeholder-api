const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable All CORS operations
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
}));

let placeholderText = "Type Your Name";
let code = "green";

app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

app.get('/placeholder', (req, res) => {
    console.log('getPlaceholderState called');
    console.log(`Current code: ${code}`);
    const responseText = code === "green" ? placeholderText : "";
    console.log(`Returning placeholderText: ${responseText}`);
    res.json({ code, placeholderText: responseText });
});

// Toggle endpoint to change the code state
app.get('/toggle', (req, res) => {
    console.log('toggle called');
    code = code === "green" ? "red" : "green";
    console.log(`Toggled code to: ${code}`);
    res.json({ code });
});

app.get('/', (req, res) => {
    res.json("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



