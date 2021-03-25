const app = require('./app')

const port = 3232

app.listen(port, () => {

    console.log(`Example app listening on port ${port}!`)
    console.log(`Open int http://localhost:${port}`)

})
