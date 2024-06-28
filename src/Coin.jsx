import { Link, useParams } from 'react-router-dom'
import { useState, useEffect} from 'react'
import axios from 'axios'

function Coin() {
    const urlBase = 'https://api.coincap.io/v2/assets'
    const { id }= useParams()
    const [coinInfo, setCoinInfo] = useState([])
    useEffect(() => {
        const getCoin = async () => {
            try{
                const response = await axios.get(`${urlBase}/${id}`)
                setCoinInfo(response.data.data)
                
            }catch {
                alert('error')
    
        }
    }
        getCoin()
    }, [])
    return (
        <>
            <Link to='/'>Home</Link>
            <h1>{coinInfo.name}</h1>
            <p>Rango: {coinInfo.rank}</p>
            <p>Símbolo: {coinInfo.symbol}</p>
            <p>{coinInfo.marketCapUsd}</p>
            <p>{coinInfo.volumeUsd24Hr}</p>
            <p>Valor en USD: {coinInfo.priceUsd}</p>
            <p>Cambio en las últimas 24 horas: {coinInfo.changePercent24Hr}</p>
    
        </>
    )
}

export default Coin