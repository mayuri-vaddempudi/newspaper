import styles from './navigation.module.css'

const categories=["Home", "World", "Sweden", "Sport", "Entertainment", "Crime"]

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            {categories.map((category, index) => <span key={index} className={styles.navItem}>{category}</span>)}
        </nav>
    )

}

export default Navigation