const express = require('express');
const { resolve } = require('path');
const cors = require('cors');
const app = express();

app.use(cors({ origin: "*" }));
app.use("/", express.static(resolve(__dirname, "build")));



const port = process.env.PORT || 3000;

app.listen(port, (error) => {
    if (error) console.log(error);

    console.log(`app is running on port ${port}`);
});