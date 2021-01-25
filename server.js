const express = require('express');
const nomeApp = process.env.npm_package_name;
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname +'/dist'));

app.get('/*', (req, res) => {
res.sendFile(__dirname + 'dist/index.html');
});


app.listen(PORT, () =>{
    console.log('server iniciado ' + PORT)
})