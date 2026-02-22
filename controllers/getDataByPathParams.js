import {startups} from '../data/data.js'

export const getDataByPathParams = (req,res)=>{
  let filteredData = startups
  const {field,term} = req.params
  const allowedFields = ['country', 'continent', 'industry']
  if(allowedFields.includes(field)){
      filteredData = filteredData.filter(obj=>obj[field].toLowerCase()===term.toLowerCase())
      res.json(filteredData)

  }else{
    res.status(400).json({message: "Search field not allowed. Please use only 'country', 'continent', 'industry'" })
  }
  

}