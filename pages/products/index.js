import ProductsComp from '../../components/mainProducts'
import { dummyProducts } from '../../constant/dummyProducts'


const Products = (props) => {


    return (
        <section>
            <h1 className={`heading`}>
                {`Explore All Products`}
            </h1>
            <ProductsComp prod={props?.products} />
        </section>
    )
}

export const getStaticProps = async () => {
    return {
        props: {
            products: dummyProducts,
        }
    };
}

export default Products
