import Products from '../components/mainProducts'
import { dummyProducts } from '../constant/dummyProducts'


const HomePage = (props) => {


    return (
        <Products prod={props?.products} />
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

export default HomePage
