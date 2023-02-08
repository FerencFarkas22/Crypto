import React from 'react'
import {Routes, Route} from "react-router-dom"
const Content = ({content}) => {
    

  return (
    <div className="Content">
    <Routes >
        {content.map(route =>  (
            <Route key={route.path} path={route.path} element={route.element} />
        ))}
    </Routes>
    </div>
  )
}

export default Content