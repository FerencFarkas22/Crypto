import React, { useState } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import Currency from "./pages/Currency"
import Fiat from "./pages/Fiat";
import Favorites from "./pages/Favorites"
import Header from './Components/Header'
import Content from './Components/Content';
import './App.scss'

import { FavoritesContext, FavoritesContextDefaults } from './Contexts/FavoritesContext';
import { SearchContext, SearchContextDefaults } from './Contexts/SearchContext';
import { FiatContext, FiatContextDefaults } from './Contexts/FiatContext';
function App() {
  const [favorites, setFavorites] = useState(FavoritesContextDefaults.value);
  const [search, setSearch] = useState(SearchContextDefaults.value);
  const [fiat, setFiat] = useState(FiatContextDefaults.value);
  const HandleSearch = (e) => {


    setSearch(e.target.value);
  }


  const pages = [
    { name: "Kriptok", path: "/", menubar: true, element: <Currency /> },
    { name: "Valuták", path: "/valutes", menubar: true, element: <Fiat /> },
    { name: "Kedvencek", path: "/favorites", menubar: true, element: <Favorites /> },
    { name: "notFound", path: "*", menubar: false, element: <Currency/> },
  ]
  return (
    <div className="App">
      <SearchContext.Provider value={{ search, setSearch }}>
        <FiatContext.Provider value={{ fiat, setFiat }}>
          <FavoritesContext.Provider value={{ favorites, setFavorites }}>
            <Router>
              <Header menu={pages}><input type="text" placeholder='Keresés...' onChange={HandleSearch} /></Header>
              <Content content={pages} />
            </Router>
          </FavoritesContext.Provider>
        </FiatContext.Provider>
      </SearchContext.Provider>
    </div>

  )
}

export default App
