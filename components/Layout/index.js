import MainNavigation from './MainNavigation'
import classes from './index.module.css'
import Footer from './footer'


const Layout = (props) => {


    return (
        <div>
            <MainNavigation />
            <main className={classes.main}>{props.children}</main>
            <Footer />
        </div>
    )
}

export default Layout
