import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { FavoritesContext } from "../Contexts/FavoritesContext"
import { SearchContext } from '../Contexts/SearchContext'
import { FiatContext } from '../Contexts/FiatContext'
import "../Styles/Currency.scss"
import CryptoTile from '../Components/CryptoTile'
import Coins from '../Components/Coins'
import {Routes, Route} from "react-router-dom"
import Coin from '../routes/Coin'

const Currency = () => {
  return (
    <div className='Currency'>
      <h1>Crypto</h1>
      <div className="mapContainer">
        
        <Routes>
          <Route path='' element={<Coins /> } />
          <Route path='/coin' element={<Coin />}>
            <Route path=':coinId' element={<Coin />}></Route>
          </Route>
        </Routes>
        
      </div>

    </div>
  )
}

export default Currency