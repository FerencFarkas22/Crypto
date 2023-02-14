import React,{useContext} from 'react'
import { FiatContext } from '../Contexts/FiatContext'
import {Routes, Route, useLocation} from 'react-router-dom';
import '../Styles/Content.scss'
const Content = ({content}) => {
  const {fiat} = useContext(FiatContext);
  const location = useLocation();
  return (
    <div className="ContentContainer">
      <div className="content">
      <Routes location={location} key={location.pathname}>
        {content.map(route =>  (
          <Route key={route.path} path={route.path} element={route.element} /> 
        ))}
    </Routes>
      </div>
  
    <div className="currency">
      <h1>Active Currency:</h1>
          <h1 className='currencyType'>{fiat.name}</h1>
         
    </div>
    </div>
  )
}

export default Content