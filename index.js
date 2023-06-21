const http = require('http');

const hostname = 'vita-team'
const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Zeet Node')
})


const app = require("./app/src")
// app.listen(PORT , () => console.log(`http://localhost:${PORT}`))
app.listen(PORT, () => {
    // console.log(window.URL);
    console.log(`server running at ${PORT}/`)
});