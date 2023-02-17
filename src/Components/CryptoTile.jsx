import React, { useContext,useState,useEffect } from 'react'
import { FiatContext } from '../Contexts/FiatContext'
import { FavoritesContext } from '../Contexts/FavoritesContext'


const CryptoTile = (props) => {
    const {fiat} = useContext(FiatContext)
    const { favorites, setFavorites } = useContext(FavoritesContext);
    const [items, setItems] = useState(fiat);

      useEffect(() => {
        const items = JSON.parse(localStorage.getItem(fiat));
        if (items) {
         setItems(items);
        }
      },[]);



    function inFavorite(){
        const selectedElements = favorites.filter(e => e === props.value.symbol);
        return selectedElements.length > 0;
    }

    function toggleFavorite() {
        if(inFavorite()){
            let newFavorites = favorites.filter(e=> e !== props.value.symbol);
            setFavorites(newFavorites);
        }else{
            let newFavorites = favorites.filter(e => true);
            newFavorites.push(props.value.symbol);
            setFavorites(newFavorites)
        }
    }

    let btnFavorite = <box-icon name='star' color='#f7f7f7' ></box-icon>

    if(inFavorite()){
    btnFavorite = <box-icon name='star' type='solid' color='#f7f7f7' ></box-icon>
    }
  return (
    <div  className="CryptoBox" >
              <div className="image">
                <img src={props.value.icon} alt="" />
              </div>
              <div className="datas">
                <h2 key={props.value.name}>{props.value.name}</h2>
                <p>{(props.value.price * items.rate).toFixed(2)} {items.name}</p>

              </div>
              <div onClick={toggleFavorite}  className="addFavorite">
            {btnFavorite}
              </div>
            </div>
  )
}

export default CryptoTile