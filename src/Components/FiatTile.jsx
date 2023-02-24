
import React, { useContext,useEffect } from 'react'
import { FiatContext } from '../Contexts/FiatContext';
import storageConfig from "../configs/storage.json"
import { Link } from 'react-router-dom';
const FiatTile = (props) => {
    const {fiat, setFiat } = useContext(FiatContext);
  
    
    function handleCurrencyFiat(value) {
        setFiat(value)
        localStorage.setItem(fiat, JSON.stringify(value));
        return props.notify(value)
    }

    return (
        <div className="container">
             <Link to="/">
            <div key={props.value.name} onClick={() => handleCurrencyFiat(props.value)} className="fiatCard" >

                <div className="image">
                    <img src={props.value.imageUrl} alt="" />
                </div>
                <div className="currencyData">
                    <h1 >{props.value.name}</h1>
                    <p>1$ = {(props.value.rate).toFixed(2)} {props.value.symbol}</p>
                </div>
            </div>
            </Link>
        </div>

    )
}

export default FiatTile