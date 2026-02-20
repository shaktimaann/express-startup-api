import express from "express";
import { startups } from "./data/data.js";


const app = express()
const PORT = 8000

app.listen(PORT,()=>{
    console.log(`successfully on ${PORT}`)
})

app.get('/api',(req,res)=>{
    let filteredData = startups

    const {industry,country, continent, is_seeking_funding, has_mvp} = req.query

    if(industry){
       filteredData= filteredData.filter((obj)=>{
            return obj.industry.toLowerCase() === industry.toLowerCase()

        })
    }

    if(country){
        filteredData=filteredData.filter((obj)=>{
            return obj.country.toLowerCase() === country.toLowerCase()

        })
    }


    if(continent){
        filteredData=filteredData.filter((obj)=>{
           return obj.continent.toLowerCase() === continent.toLowerCase()

        })
    }

    if (is_seeking_funding) {
    filteredData = filteredData.filter( startup => 
      startup.is_seeking_funding === JSON.parse(is_seeking_funding.toLowerCase())
    )
  }
    if (has_mvp) {
    filteredData = filteredData.filter( startup => 
      startup.has_mvp === JSON.parse(has_mvp.toLowerCase())
    )
  }


    res.json(filteredData)

})




