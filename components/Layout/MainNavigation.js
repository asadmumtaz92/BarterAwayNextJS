import { useState } from 'react';
import classes from './MainNavigation.module.css'
import Link from 'next/link'

function MainNavigation() {

    const [activeTab, setActiveTab] = useState(1)
    const activeTabHandler = (tab) => {
        setActiveTab(tab)
    }

    const LinkItem = ({title, link, val}) => {
        return (
            <li onClick={() => activeTabHandler(val)}>
                <Link href={link} className={`${activeTab === val && classes.active}`}>{title}</Link>
            </li>
        )
    }

    return (
        <header className={classes.header}>
            <div className={classes.logo}>Barter Away</div>
            <nav>
                <ul>
                    <LinkItem title='Home' link='/' val={1} />
                    <LinkItem title='Products' link='/products/' val={2} />
                    <LinkItem title='Create' link='/products/add-product' val={3} />
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation
