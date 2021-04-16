import express, { Application } from 'express'

const app: Application = express()

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.send('Server running :)')
})

export default app
