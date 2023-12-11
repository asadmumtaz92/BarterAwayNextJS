import { MongoClient, ObjectId } from 'mongodb';
import classes from '../../components/mainProducts.module.css';
// import { useRouter } from 'next/router';


const DynamicPage = (props) => {


    // const router = useRouter();
    // const product_id = router.query.product_id;
    const product = props?.product;


    return (
        <section>
            <div className={`${classes.main}`}>
                <img
                    // src={`https://source.unsplash.com/300x300/?${product_id}-${index}`}
                    src={`${product?.image}`}
                    className={``} alt="product photo"
                    style={{height: '80%'}}
                />
            </div>
            <h1 className={`heading`} style={{marginTop: 20}}>{product?.title}</h1>
            <h6 className={``}>DESCRIPTION: {product?.desc}</h6>
        </section>
    )
}

export const getStaticPaths = async () => {

    // Connect Data Base
    const client = await MongoClient.connect('mongodb+srv://asadmumtaz92:Qwerty123@cluster1.csldcdq.mongodb.net/BarterAway?retryWrites=true&w=majority');
    const db = client.db();

    // Create Collection/table
    const prodCollections = db.collection('products');
    const allProd = await prodCollections.find().toArray();
    // const prod = allProd.map(item => { return { id: item?._id.toString() } })
    client.close();

    return {
        fallback: false, // accessable link other than this you got 404 page (if its false then response 404 if path not match) && (if its true then response is shown)
        paths: allProd.map((item) => ({
            params: { product_id: item?._id.toString() },
        })),
        // OR
        // paths: [{ params: { product_id: 'Cars' } }],
    }
}

export const getStaticProps = async (context) => {
    // get prod id from link but here we use context insted of router
    const prod_id = context.params.product_id;

    // Connect Data Base
    const client = await MongoClient.connect('mongodb+srv://asadmumtaz92:Qwerty123@cluster1.csldcdq.mongodb.net/BarterAway?retryWrites=true&w=majority');
    const db = client.db();

    // Create Collection/table
    const prodCollections = db.collection('products');
    const prodData = await prodCollections.findOne({ _id: new ObjectId(prod_id) });
    // console.log('prodData', prodData)
    // const prod = await prodCollections.find().toArray();
    // const prodData = prod.map((item) => {
    //     if (item?._id.toString() == prod_id) {
    //         return {
    //             id: item?._id.toString(),
    //             title: item?.title,
    //             desc: item?.desc,
    //             price: item?.price,
    //             image: item?.image,
    //         }
    //     }
    // });
    client.close();


    return {
        props: {
            product: {
                id: prodData?._id.toString(),
                title: prodData?.title,
                desc: prodData?.desc,
                price: prodData?.price,
                image: prodData?.image,
            },
        },
        revalidate: 10, // get leatest data after every 10 second (use for production)
    };
}

export default DynamicPage
