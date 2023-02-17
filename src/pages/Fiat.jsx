import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { toast, ToastContainer } from 'react-toastify'
import FiatTile from '../Components/FiatTile';
import { SearchContext } from '../Contexts/SearchContext'
import '../Styles/Fiat.scss'
import 'react-toastify/dist/ReactToastify.css';

const Fiat = () => {
  const [list, setList] = useState([]);
  const { search } = useContext(SearchContext);

  const notify = (e) => toast.success(`${e.name} - ${e.symbol} Kiválasztva!`, {
    position: "bottom-center",
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  
 

  useEffect(() => {
    axios.get("https://api.coinstats.app/public/v1/fiats")
      .then(res => {
        setList(res.data)
      })
  }, [])





  const filteredElements = list.filter(e => e.name.toLowerCase()
    .includes(search.toString().toLowerCase()));

  return (
    <div className='FiatContainer'>
{/* Same as */}
<ToastContainer style={{width:"300px"}}/>
      <h1>Pénznemek</h1>
      {filteredElements.map(e => <FiatTile key={e.name} notify={()=> notify(e)} value={e} />)}
   
      </div>
  )
}

export default Fiat