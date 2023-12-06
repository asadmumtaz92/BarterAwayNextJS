import { useEffect, useState } from 'react'
import ProductsComp from '../../components/mainProducts'
import { dummyProducts } from '../../constant/dummyProducts'


const Products = () => {


    const [prodData, setProdData] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setProdData(dummyProducts)
        }, 1000)
    }, [])


    return (
        <section>
            <h1 className={`heading`}>
                {`Explore All Products`}
            </h1>
            <ProductsComp prod={prodData} />
        </section>
    )
}

export default Products
