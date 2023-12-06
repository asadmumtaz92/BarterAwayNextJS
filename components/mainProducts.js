import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import classes from './mainProducts.module.css'

const Products = (props) => {


    const route = useRouter()

    const ProductList = () => {
        return props.prod.map((item) => {
            const navigateHamdler = () => {
                route.push('/products/' + item?.title)
            }
            return (
                <div key={item?.id} className={`${classes.itemBox}`}>
                    <Link onClick={navigateHamdler} href=''>
                        <Image
                            src={`https://source.unsplash.com/300x300/?${item?.title}`}
                            className={`${classes.itemImg}`} alt="product photo"
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
