const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

// web server : 
app.use(express.static("frontend"));

app.listen(PORT, function(){
    console.log("Server is running on http://localhost:" + PORT);
});