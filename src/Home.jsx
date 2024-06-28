import { Link } from 'react-router-dom'
import { useState, useEffect} from 'react'
import axios from 'axios'


function Home() {
    const urlBase = 'https://api.coincap.io/v2/assets'
    const [coinsInfo, setCoinsInfo] = useState([])
    useEffect(() => {
        const getCoins = async () => {
            try{
                const response = await axios.get(urlBase)
                setCoinsInfo(response.data.data)
                
            }catch {
                alert('error')
    
        }
    }
        getCoins()
    }, [])
    
    return (
        <>
            <div className="mainHome">
            <h1>Principales Criptomonedas</h1>
            <ul>
                {coinsInfo.map(element => (<Link to={`/coin/${element.id}`}><li>
                <div key={element.name}>
                    <h3>{element.name}</h3>
                    <p>Rango: {element.rank}</p>
                    <p>Precio en USD: {element.priceUsd}</p>
                </div>
            </li></Link>))}
            </ul>
            </div>
        </>
    )
}

export default Home