let express = require('express');
let cors = require('cors');
const axios = require('axios');

let app = express();

app.use(cors());

const API_KEY = "RGAPI-db2a0176-d551-4f33-a5c3-eec944013276";

app.listen(4000, function () {
    console.log("server started on port 4000");
});
