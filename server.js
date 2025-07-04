const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/helloworld.html'));
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});