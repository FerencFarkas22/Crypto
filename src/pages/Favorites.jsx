import React, {useContext} from 'react'

import { FavoritesContext } from "../Contexts/FavoritesContext"

const Favorites = () => {
  const { favorites, setFavorites } = useContext(FavoritesContext)

  return (
    <div className="Favorites">
      {favorites.map(e => {
        return(
            <h1>{e.name}</h1>
        )
      })}
    </div>
  )
}

export default Favorites