import Products from '../components/mainProducts'
import { dummyProducts } from '../constant/dummyProducts'


const HomePage = (props) => {


    return (
        <Products prod={props?.products} />
    )
}

export const getStaticProps = async () => {
    return {
        props: {
            products: dummyProducts,
        }
    };
}

export default HomePage
