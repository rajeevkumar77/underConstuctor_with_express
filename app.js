import express from 'express'
const app = express()
const port = process.env.PORT || '3000'
import web from './routes/web.js'
import underContruction from './middlewares/uc-middleware.js'

// Application Level Middleware
app.use(underContruction)
// app.use('/about', underContruction)

// Set Template Engine
app.set('view engine', 'ejs')

// Load Routes
app.use('/', web)

app.listen(port, () => {
 console.log(`Server listening at http://localhost:${port}`)
})