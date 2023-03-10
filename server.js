const express = require('express');
const { join } = require('path');
const path = require('path');

let initial_path = path.join(__dirname, "PhotoPix-master");

let app = express();
app.use(express.static(initial_path));

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
})
app.use((req, res) => {
    res.json("404");
})

app.listen(3000, () => {
    console.log('listening on port 3000......');

})