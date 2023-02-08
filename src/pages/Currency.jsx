import React, { useEffect, useState } from 'react'
import axios from "axios"

const Currency = () => {
  const [coinApi, setCoinApi] = useState([]);

  useEffect(()=>{
   axios.get("https://api.coinstats.app/public/v1/coins")
   .then(res => {
    setCoinApi(res.data.coins)
   }) 
  },[])
  console.log(coinApi)
  return (
    <div>{coinApi.map((e) =>{
      return(
        <p  key={e.name}>{e.name},  </p>
      )
    })}</div>
  )
}

export default Currency