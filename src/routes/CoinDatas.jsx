import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import DOMPurify from 'dompurify'


import "../Styles/Coin.scss"
const Coin = () => {
    const params = useParams();
    const [coin, setCoin] = useState([])


    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${params.coinId}`).then((res) => {
            setCoin(res.data)
            console.log(res.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    const hour = coin.market_data?.price_change_percentage_1h_in_currency?.usd;
    const day = coin.market_data?.price_change_percentage_24h_in_currency?.usd;
    const seven = coin.market_data?.price_change_percentage_7d_in_currency?.usd;
    const fourteen = coin.market_data?.price_change_percentage_14d_in_currency?.usd;
    const thirthy = coin.market_data?.price_change_percentage_30d_in_currency?.usd;
    const yrs = coin.market_data?.price_change_percentage_1y_in_currency?.usd;


    return (
        <div className='moreDataAboutCrypto'>
            <div className='image'>{coin.image ? <img src={coin.image.small} alt="" /> : null}<p>rank: #{coin.coingecko_rank}</p></div>
            <h1>{coin.id}</h1>
            <div className='dataContainer'>
                <table>
                    <thead>
                        <tr>
                            <th>1h</th>
                            <th>1d</th>
                            <th>7d</th>
                            <th>14d</th>
                            <th>30d</th>
                            <th>1y</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={hour < 0 ? "red" : "green"}>{coin.market_data?.price_change_percentage_1h_in_currency ? <> {coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}%</> : null}</td>
                            <td className={day < 0 ? "red" : "green"}>{coin.market_data?.price_change_percentage_24h_in_currency ? <> {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%</> : null}</td>
                            <td className={seven < 0 ? "red" : "green"}>{coin.market_data?.price_change_percentage_7d_in_currency ? <> {coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2)}%</> : null}</td>
                            <td className={fourteen < 0 ? "red" : "green"}>{coin.market_data?.price_change_percentage_14d_in_currency ? <> {coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(2)}%</> : null}</td>
                            <td className={thirthy < 0 ? "red" : "green"}>{coin.market_data?.price_change_percentage_30d_in_currency ? <> {coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2)}%</> : null}</td>
                            <td className={yrs < 0 ? "red" : "green"}>{coin.market_data?.price_change_percentage_1y_in_currency ? <> {coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2)}%</> : null}</td>
                        </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>
                <div className="socialAndDescriptionBox">
                    <div className="description">
                        <h2 style={{ margin: "20px" }}>Description</h2>
                        <p dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(coin.description ? coin.description.en : ""),
                        }}>
                        </p>
                    </div>

                    <div className="socialBox">
                        <h2>Social media</h2>
                        <div className='twitter'>
                            {coin.community_data ?
                                <h2> {coin.community_data.twitter_followers} <span style={{ color: "white" }}>Twitter Followers</span></h2> : null}
                        </div>
                        <div className='reddit'>
                            {coin.community_data ?
                                <h2> {coin.community_data.reddit_subscribers} <span style={{ color: "white" }}>Reddit Followers</span></h2> : null}
                        </div>
                        <div className="genesisDate">
                            <h3>Genesis date</h3>
                            {coin.genesis_date}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Coin