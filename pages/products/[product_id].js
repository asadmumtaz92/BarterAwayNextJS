// import { useRouter } from 'next/router'
import classes from '../../components/mainProducts.module.css'
// import Image from "next/image"


const DynamicPage = (props) => {


    // const router = useRouter()
    // const product_id = router.query.product_id
    const product_id = props.product_id
    const arr = [{}, {}, {}, {}, {}, {}, {}, {},]


    return (
        <section>
            <h1 className={`heading`}>{product_id}</h1>
            <div className={`${classes.main}`}>
                {arr.map((_, index) => {
                    return (
                        <div key={index} className={`${classes.itemBox}`}>
                            <img
                                src={`https://source.unsplash.com/300x300/?${product_id}-${index}`}
                                className={`${classes.itemImg}`} alt="product photo"
                            />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export const getStaticPaths = async () => {

    return {
        fallback: false, // accessable link other than this you got 404 page (if its false then response 404 if path not match) && (if its true then response is shown)
        paths: [
            {
                params: {product_id: 'Car' }
            },
            {
                params: { product_id: 'Yoga' }
            },
            {
                params: { product_id: 'Nature' }
            },
            {
                params: { product_id: 'Beachs' }
            },
            {
                params: { product_id: 'Animals' }
            },
            {
                params: { product_id: 'Laptops' }
            },
        ],
    }
}

export const getStaticProps = async (context) => {
    // fetch data from an API
    
    // get pro id from link but her we don't use router so use context
    const prod_id = context.params.product_id;
    return {
        props: {
            product_id: prod_id,
        },
        revalidate: 10, // get leatest data after every 10 second (use for production)
    };
}

export default DynamicPage
