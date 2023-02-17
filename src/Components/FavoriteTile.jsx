import React from 'react'

const FavoriteTile = () => {
    function apiFetch() {
        console.log("lefutott");
        axios.get("https://api.coinstats.app/public/v1/coins")
          .then(res => {
            setList(res.data.coins)
          });
      }
      useEffect(() => {
        apiFetch();
      }, [])
    

  return (
    <div className='FavoriteBox'>
              <div className='favoriteImage'>
                <img src={e.image} alt="" />
              </div>
              <div className='title'>
                <h2 key={index}>{e}</h2>
                <p>{(e.price * fiat.rate).toFixed(2)} {fiat.name}</p>
              </div>

            </div>
  )
}

export default FavoriteTile