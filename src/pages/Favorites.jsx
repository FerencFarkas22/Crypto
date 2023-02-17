import React, { useContext, useEffect, useState } from 'react'
import { FiatContext } from '../Contexts/FiatContext'
import { FavoritesContext } from "../Contexts/FavoritesContext"
import '../Styles/Favorites.scss'
import CryptoTile from '../Components/CryptoTile'
import { SearchContext } from '../Contexts/SearchContext'
import axios from 'axios';


const Favorites = (props) => {
  const { favorites, setFavorites } = useContext(FavoritesContext)
  const { fiat } = useContext(FiatContext);
  const [list, setList] = useState([]);
  const {search, setSearch} = useContext(SearchContext);
  
  function apiFetch() {

  axios.get("https://api.coinstats.app/public/v1/coins")
    .then(res => {
      setList(res.data.coins)
    });
}
useEffect(() => {
  apiFetch();
}, [])

useEffect(() => {
let intervalHandler= setInterval(function () {
    apiFetch();
  }, 10000)
  return ()=>{
    clearInterval(intervalHandler)
  }
})


  const filteredElements = list
    .filter(element => favorites.includes(element.symbol))
    .filter(e => e.name.toLowerCase()
      .includes(search.toString().toLowerCase()))

  
  return (
    <div className="Favorite">
      <h1>Kedvencek</h1>
      <div className="mapList">
        {filteredElements.map(e => <CryptoTile key={e.name} value={e}/>)}
      </div>

    </div>
  )
}

export default Favorites