import React, { useEffect, useState } from 'react'
import axios from "axios"

const Fiat = () => {
  const [fiatApi, setFiatApi] = useState([]);

  useEffect(() => {
    axios.get("https://api.coinstats.app/public/v1/fiats")
      .then(res => {
        setFiatApi(res.data)
      })
  }, [])
  console.log(fiatApi)


  return (
    <div>{fiatApi.map((e) =>{
      return(
        <p  key={e.name}>{e.name},  </p>
      )
    })}</div>
  )
}

export default Fiat