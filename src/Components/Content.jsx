import React,{useContext,useState,useEffect} from 'react'
import { FiatContext } from '../Contexts/FiatContext'
import {Routes, Route, useLocation} from 'react-router-dom';
import { FavoritesContext } from '../Contexts/FavoritesContext';
import '../Styles/Content.scss'

const Content = ({content}) => {
  const {fiat} = useContext(FiatContext);
  const {favorites} = useContext(FavoritesContext);
  const location = useLocation();
  const [items, setItems] = useState(fiat);

    useEffect(() => {
      const items = JSON.parse(localStorage.getItem(fiat));
      if (items) {
       setItems(items);
      }
    },[fiat]);


    const[style,setStyle] = useState({"display":"block"})

  return (
    <div className="ContentContainer">
      <div className="content">
      <Routes location={location} key={location.pathname}>
        {content.map(route =>  (
          <Route key={route.path} path={route.path} element={route.element}>
          </Route> 
         
        ))
        }
    </Routes>
      </div>
  <div className="CurrencyAndFavoriteBox">
  <div className="currency">
      <h1>Active Currency:</h1>
          <h1 className='currencyType'>{items.name}</h1>
        </div>
        
        <div className="favorites" style={style}>
        <h1>Favorites</h1>
        <div className="favFiat" style={{ pointerEvents: "none" }}>
          {favorites.map((e, index) => {
            return (
              <div key={index} className="favoriteBox">
                <h2 key={e.name}>{e}</h2>
              </div>
            )
          })}
        </div>
      </div>
  </div>
    
    </div>
  )
}

export default Content