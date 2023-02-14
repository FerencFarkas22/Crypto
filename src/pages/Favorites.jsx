import React, { useContext } from 'react'
import { FiatContext } from '../Contexts/FiatContext'
import { FavoritesContext } from "../Contexts/FavoritesContext"
import '../Styles/Favorites.scss'
const Favorites = () => {
  const { favorites, setFavorites } = useContext(FavoritesContext)
  const { fiat } = useContext(FiatContext);
  return (
    <div className="Favorite">
      <h1>Kedvencek</h1>
      <div className="mapList">
        {favorites.map((e, index) => {
          return (
            <div className='FavoriteBox'>
              <div className='favoriteImage'>
                <img src={e.image} alt="" />
              </div>
              <div className='title'>
                <h2 key={index}>{e.name}</h2>
                <p>{(e.price * fiat.rate).toFixed(2)} {fiat.name}</p>
              </div>

            </div>

          )
        })}
      </div>

    </div>
  )
}

export default Favorites