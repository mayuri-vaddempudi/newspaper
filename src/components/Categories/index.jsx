import ArticleWithImage from '../ArticleWithImage'
import styles from './categories.module.css'
import { categories } from '../../data/data'
const Categories = () => {
    return (
        <div>
            {categories.map((category, index) =>
                <div key={index} className={styles.category}>
                    <h3>{category.name}</h3>
                    {category.articles.map((article, index) => <ArticleWithImage key={index} {...article} />)}
                </div>
            )}
        </div>
    )
}

export default Categories