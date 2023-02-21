import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { SearchContext } from '../Contexts/SearchContext'
import "../Styles/CryptoPage.scss"
import CryptoTile from '../Components/CryptoTile'


const Coins = () => {
    const [coinApi, setCoinApi] = useState([]);
    const { search } = useContext(SearchContext);

    useEffect(() => {
        axios.get("https://api.coinstats.app/public/v1/coins").then(res => {
            setCoinApi(res.data.coins)
           
        })
    }, [])

    const filteredElements = coinApi.filter(e => e.name.toLowerCase()
        .includes(search.toString().toLowerCase()));

    return (
        <>
            {filteredElements.map(e => {
                return (
                    <CryptoTile key={e.id} value={e} />  
                )
            })}
       </>
    )
}

export default Coins