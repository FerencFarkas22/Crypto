import React from 'react'
import "../Styles/CryptoPage.scss"
import {Routes, Route} from "react-router-dom"
import Coins from '../routes/Coins'
import Coin from '../routes/CoinDatas'

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