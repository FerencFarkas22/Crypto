import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import { FiatContext } from '../Contexts/FiatContext';
import { SearchContext } from '../Contexts/SearchContext'
import '../Styles/Fiat.scss'
import 'react-toastify/dist/ReactToastify.css';
import storageConfig from "../config/storage.json"


const Fiat = () => {
  const [fiatApi, setFiatApi] = useState([]);
  const {fiat, setFiat} = useContext(FiatContext);
  const { search } = useContext(SearchContext);

  const notify = (e) => toast(`${e.name} kiválasztva! ${e.rate.toFixed(2)} ${e.symbol}`, {
    position: "bottom-center",
    autoClose: 600,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    type: "success",
    zIndex:6,
  });

  console.log(fiat);

  useEffect(() => {
    axios.get("https://api.coinstats.app/public/v1/fiats")
      .then(res => {
        setFiatApi(res.data)
      })
  }, [])

 function handleCurrencyFiat(e){
  setFiat(e)
  localStorage.setItem(storageConfig.fiat, JSON.stringify(e));
  return notify(e) 
  }

  const filteredElements = fiatApi.filter(e => e.name.toLowerCase()
    .includes(search.toString().toLowerCase()));

  return (
    <div className='FiatContainer'>
      <ToastContainer style={{width:'300px'}}/>
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