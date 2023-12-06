import { useEffect, useState } from 'react'
import Products from '../components/mainProducts'
import { dummyProducts } from '../constant/dummyProducts'


const HomePage = () => {


    const [prodData, setProdData] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setProdData(dummyProducts)
        }, 1000)
    }, [])
    

    return (
        <Products prod={prodData} />
    )
}

export default HomePage
