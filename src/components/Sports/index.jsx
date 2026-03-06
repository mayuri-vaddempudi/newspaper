import styles from './sports.module.css'
import ArticleWithImage from '../ArticleWithImage'
import {featuredSportsArticles} from '../../data/data';

const Sports = () => {
    return (
        <div className={styles.sports}>
            {featuredSportsArticles.map((article, index) => <ArticleWithImage key={index} {...article} />)}
        </div>
    )
}

export default Sports