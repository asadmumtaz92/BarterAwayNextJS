import { useRouter } from 'next/router'
import classes from '../../components/mainProducts.module.css'

const DynamicPage = () => {


    const router = useRouter()
    const product_id = router.query.product_id
    const arr = [{}, {}, {}, {}, {}, {}, {}, {},]


    return (
        <section>
            <h1 className={`heading`}>{product_id}</h1>
            <div className={`${classes.main}`}>
                {arr.map((_, index) => {
                    return (
                        <div className={`${classes.itemBox}`}>
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

export default DynamicPage