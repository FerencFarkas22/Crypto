import React,{useContext} from 'react'
import {Routes, Route} from "react-router-dom"

import { FavoritesContext } from "../Contexts/FavoritesContext"
import { FiatContext } from '../Contexts/FiatContext'
import '../Styles/Content.scss'
const Content = ({content}) => {
  const { favorites } = useContext(FavoritesContext)
  const {fiat} = useContext(FiatContext);

  return (
    <div className="ContentContainer">
      <div className="content">
      <Routes >
        {content.map(route =>  (
            <Route key={route.path} path={route.path} element={route.element} />
        ))}
    </Routes>
      </div>
  
    <div className="currency">
      <h1>Active Currency:</h1>
          <h1>{fiat.name}</h1>
         
    </div>
    </div>
  )
}

export default Content