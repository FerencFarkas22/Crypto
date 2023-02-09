import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { FavoritesContext } from "../Contexts/FavoritesContext"
import { SearchContext } from '../Contexts/SearchContext'
import "../Styles/Currency.scss"

const Currency = () => {
  const [coinApi, setCoinApi] = useState([]);
  const { favorites, setFavorites } = useContext(FavoritesContext)
  const { search } = useContext(SearchContext);
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    axios.get("https://api.coinstats.app/public/v1/coins").then(res => {
      setCoinApi(res.data.coins)
    })
  }, [])

  function addFavorite(e, index) {
    
    if (favorites.find(e => e.index === index)) {
      const indexOfObject = favorites.findIndex(o => {
        return o.index === index;
      })
      setCurrency(
        favorites.splice(indexOfObject, 1)
      )
    } else {
      setCurrency(favorites.push({ index: index, name: e.name, image: e.icon, price: e.price }))
    }
  }
  console.log("currency");
  console.log(currency);
  console.log("favorites");
  console.log(favorites);
  //Keresés alapján szűrés
  const filteredElements = coinApi.filter(e => e.name.toLowerCase()
    .includes(search.toString().toLowerCase()));

  return (
    <div className='Currency'>
      <h1>Favorites</h1>
      <div className="favFiat" style={{ pointerEvents: "none" }}>
        {favorites.map((e, index) => {
          return (
            <div onClick={() => addFavorite(e, index)} className="favoriteBox">
              <h2 key={e.name}>{e.name}  </h2>
              <p>price: {e.price.toFixed(2)}$</p>
            </div>
          )
        })}

      </div>
      <div className="mapContainer">
        <h1>All Crypto</h1>
        {filteredElements.map((e, index) => {
          return (
            <div onClick={() => addFavorite(e, index)} className="CryptoBox">
              <div className="image">
                <img src={e.icon} alt="" />
              </div>
              <div className="datas">
                <h2 key={e.name}>{e.name},  </h2>
                <p>price: {e.price.toFixed(2)}$</p>
              </div>

            </div>

          )
        })}
      </div>

    </div>
  )
}

export default Currency