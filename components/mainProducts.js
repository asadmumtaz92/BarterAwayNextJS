import Link from "next/link"
import { useRouter } from "next/router"
import classes from './mainProducts.module.css'

const Products = (props) => {


    const route = useRouter()

    const ProductList = () => {
        return props?.prod.map((item) => {
            const navigateHamdler = () => {
                route.push('/products/' + item?.id)
            }
            return (
                <div key={item?.id} className={`${classes.itemBox}`}>
                    <Link onClick={navigateHamdler} href=''>
                        <img
                            // src={`https://source.unsplash.com/300x300/?${item?.title}`}
                            src={`${item?.image}`}
                            className={`${classes.itemImg}`}
                            style={{ boxShadow: '0px 0px 1px #c3c3c3' }} alt={`${item?.title}`}
                        />
                        <p className={`${classes.itemTitle}`}>{item?.title}</p>
                    </Link>
                </div>
            )
        })
    }


    return (
        <div className={`${classes.main}`}>
            <ProductList />
        </div>
    )
}

export default Products
