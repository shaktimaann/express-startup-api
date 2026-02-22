import express from "express";
import { apiRouter } from "./routes/apiRoutes.js";
import cors from 'cors'


const app = express()
const PORT = 8000


app.use(cors)
app.use('/api',apiRouter)


app.use((req,res)=>{
    req.status(404).json({ message: "Endpoint not found. Please check the API documentation." })
})

app.listen(PORT,()=>{
    console.log(`successfully on ${PORT}`)
})






