import React, {useContext} from 'react'

import { FavoritesContext } from "../Contexts/FavoritesContext"

const Favorites = () => {
  const { favorites, setFavorites } = useContext(FavoritesContext)

  return (
    <div className="Favorites">
      {favorites.map((e, index) => {
        return(
            <h1 key={index}>{e.name}</h1>
        )
      })}
    </div>
  )
}

export default Favorites