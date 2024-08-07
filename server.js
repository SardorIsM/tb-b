import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'

import adminRouter from './router/admin.router.js'



dotenv.config()

const PORT = process.env.PORT || 5004

const app = express()

app.use(express.json())


app.use(cors())

app.use(adminRouter)


app.listen(PORT, () => {
    console.log(`server ishladi... ${PORT}`); 
})