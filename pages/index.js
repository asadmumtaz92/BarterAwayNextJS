import { Fragment } from 'react';
import { MongoClient } from 'mongodb';
import Products from '../components/mainProducts';
import Head from 'next/head';


const HomePage = (props) => {


    return (
        <Fragment>
            <Head>
                <title>Home</title>
                <meta name='description' content='Barter Away exchange your products.' />
            </Head>
            <Products prod={props?.products} />
        </Fragment>
    )
}

// its run on every incoming request NOTE getStaticProps is better then getServerSideProps
// export const getServerSideProps = async (context) => {
//     const req = context.req;
//     const res = context.res;
//     // fetch data from an API
//     // Connect Data Base
//     const client = await MongoClient.connect('mongodb+srv://asadmumtaz92:Qwerty123@cluster1.csldcdq.mongodb.net/BarterAway?retryWrites=true&w=majority');
//     const db = client.db();

//     // Create Collection/table
//     const prodCollections = db.collection('products');
//     const allProd = await prodCollections.find().toArray();
//     return {
//         props: {
//             products: allProd.map((item) => ({
//                 id: item?._id.toString(),
//                 title: item?.title,
//                 desc: item?.desc,
//                 price: item?.price,
//                 image: item?.image,
//             }))
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

export default HomePage
