import { MongoClient } from 'mongodb';
import ProductsComp from '../../components/mainProducts';
import Head from 'next/head';


const Products = (props) => {


    return (
        <section>
            <Head>
                <title>Products</title>
                <meta name='description' content='Barter Away exchange your products.' />
            </Head>
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
    // Connect Data Base
    const client = await MongoClient.connect('mongodb+srv://asadmumtaz92:Qwerty123@cluster1.csldcdq.mongodb.net/BarterAway?retryWrites=true&w=majority');
    const db = client.db();
    
    // Create Collection/table
    const prodCollections = db.collection('products');
    const allProd = await prodCollections.find().toArray();
    client.close();

    return {
        props: {
            products: allProd.map((item) => {
                return {
                    id: item?._id.toString(),
                    title: item?.title,
                    desc: item?.desc,
                    price: item?.price,
                    image: item?.image,
                }
            })
        },
        revalidate: 10, // get leatest data after every 10 second (use for production)
    };
}

export default Products
