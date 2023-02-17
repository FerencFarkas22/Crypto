import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { FavoritesContext } from "../Contexts/FavoritesContext"
import { SearchContext } from '../Contexts/SearchContext'
import { FiatContext } from '../Contexts/FiatContext'
import "../Styles/Currency.scss"
import CryptoTile from '../Components/CryptoTile'

const Currency = () => {
  const [coinApi, setCoinApi] = useState([]);
  const { favorites, setFavorites } = useContext(FavoritesContext)
  const { search } = useContext(SearchContext);
  const { fiat } = useContext(FiatContext);
  const [currency, setCurrency] = useState([]);


  useEffect(() => {
    axios.get("https://api.coinstats.app/public/v1/coins").then(res => {
      setCoinApi(res.data.coins)
    })
  }, [])



  function addFavorite(e, index) {
    if (favorites.find(e => e.index === index)) {
      const indexOfObject = favorites.findIndex(o => { return o.index === index; })

      setCurrency(favorites.splice(indexOfObject, 1))
    } else {
      setCurrency(favorites.push({ index: index, name: e.name, image: e.icon, price: e.price}))
    }
  }

  const filteredElements = coinApi.filter(e => e.name.toLowerCase()
    .includes(search.toString().toLowerCase()));

 

  return (
    <div className='Currency'>
      <div className="mapContainer">
        <h1>All Crypto</h1>
        {filteredElements.map(e => <CryptoTile key={e.id} value={e}/> )}
      </div>

    </div>
  )
}

export default Currency