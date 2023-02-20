import React, { useContext, useState, useEffect } from 'react'
import { FiatContext } from '../Contexts/FiatContext'
import { FavoritesContext } from '../Contexts/FavoritesContext'
import { Link } from 'react-router-dom'

const CryptoTile = (props) => {
  const { fiat } = useContext(FiatContext)
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const [items, setItems] = useState(fiat);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(fiat));
    if (items) {
      setItems(items);
    }
  }, []);



  function inFavorite() {
    const selectedElements = favorites.filter(e => e === props.value.symbol);
    return selectedElements.length > 0;
  }

  function toggleFavorite() {
    if (inFavorite()) {
      let newFavorites = favorites.filter(e => e !== props.value.symbol);
      setFavorites(newFavorites);
    } else {
      let newFavorites = favorites.filter(e => true);
      newFavorites.push(props.value.symbol);
      setFavorites(newFavorites)
    }
  }

  let btnFavorite = <box-icon name='message-add' color='#ffffff' alt="Add favorite" ></box-icon>

  if (inFavorite()) {
    btnFavorite = <box-icon name='star' type='solid' color='#f7f7f7' alt="Remove" ></box-icon>
  }
  return (
    <div className='box'>
      {<Link to={`/coin/${props.value.id}`}>
        <div className="image">
          <img src={props.value.icon} alt="" />
        </div>
        <div className="datas">
          <h2 key={props.value.name}>{props.value.name}</h2>
          <p>{(props.value.price * items.rate).toFixed(2)} {items.name}</p>

        </div>
      </Link>}
      <div onClick={toggleFavorite} className="addFavorite">
        {btnFavorite}
      </div>
    </div>
  )
}

export default CryptoTile