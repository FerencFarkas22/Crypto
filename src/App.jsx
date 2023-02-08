import React from 'react'
import {HashRouter as Router} from 'react-router-dom'
import Currency from "./pages/Currency"
import Fiat from "./pages/Fiat";
import Favorites from "./pages/Favorites"
import Header from './Components/Header'

import './App.scss'
import Content from './Components/Content';

function App() {
const pages = [
  {name:"Kriptok", path:"/", menubar:true, element: <Currency/> },
  {name:"Valuták", path:"/valutes", menubar:true, element: <Fiat/> },
  {name:"Kedvencek", path:"/favorites", menubar:true, element: <Favorites/> },
  {name:"notFound", path:"*", menubar:false, element: <>PageNotFound</> },
]
  return (
    <div className="App">
      <Router>
        <Header menu={pages}><input type="text" placeholder='Keresés...'/></Header>
        <Content content={pages}/>
      </Router>
    </div>
  )
}

export default App
