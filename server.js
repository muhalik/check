const express = require('express')
const app = express()
const port = 9000


app.get('/download', function(req, res){
    const file = `${__dirname}/.well-known/yes/one.txt`;
    res.download(file); // Set disposition and send it.
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))