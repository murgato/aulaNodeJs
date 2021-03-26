import mongoose = require("mongoose")

import settings from "../appSettings.json";

const app = require('./app')

const port = 3232

mongoose
    .connect(settings.urlDatabase).then(() => {
        app.listen(port, () => {

            console.log(`Example app listening on port ${port}!`)
            console.log(`Open int http://localhost:${port}`)

        })
    })


