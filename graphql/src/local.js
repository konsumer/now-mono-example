// use this (with npm run local) top test local app

const importESM = require('esm')(module)
const app = importESM('./index.js').default

const { PORT = 1234 } = process.env
app.listen({ port: PORT })
console.log(`Listening on http://localhost:${PORT}`)
