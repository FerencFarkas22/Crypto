import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { FiatContext } from '../Contexts/FiatContext';
import { SearchContext } from '../Contexts/SearchContext'
import '../Styles/Fiat.scss'
const Fiat = () => {
  const [fiatApi, setFiatApi] = useState([]);
  const {fiat, setFiat} = useContext(FiatContext);
  const { search } = useContext(SearchContext);
  useEffect(() => {
    axios.get("https://api.coinstats.app/public/v1/fiats")
      .then(res => {
        setFiatApi(res.data)
      })
  }, [])
 function handleCurrencyFiat(e){
  setFiat(e);
  }
  const filteredElements = fiatApi.filter(e => e.name.toLowerCase()
    .includes(search.toString().toLowerCase()));

  return (
    <div className='FiatContainer'>
      <h1>Pénznemek</h1>
      {filteredElements.map((e) =>{
      return(
        <div key={e.name} onClick={() => handleCurrencyFiat(e)} className="fiatCard" >
          <div className="image">
          <img src={e.imageUrl} alt="" />
            </div>
            <div className="currencyData">
            <h1 >{e.name}</h1>
            <p>1$ = {(e.rate).toFixed(2)} {e.symbol}</p>
            </div>
        </div>
      )
    })}</div>
  )
}

export default Fiat