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

// // its run on every incoming request NOTE getStaticProps is better then getServerSideProps
// export const getServerSideProps = async (context) => {
//     const req = context.req;
//     const res = context.res;
//     // fetch data from an API
//     return {
//         props: {
//             products: dummyProducts,
//         }
//     };
// }

export const getStaticProps = async () => {
    // fetch data from an API
    return {
        props: {
            products: dummyProducts,
        },
        revalidate: 10, // get leatest data after every 10 second (use for production)
    };
}

export default Products
