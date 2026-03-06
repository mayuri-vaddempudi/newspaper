import styles from './article.module.css'
import {getImageURL} from '../../utils/functions'

const ArticleWithImage = ({headline, deck, category, image}) => {
    return (
        <div className={styles.article}>
            {image && <img src={getImageURL(image)} height="auto" width="100%" />}
            <div className={styles.headline}>{headline}. {deck}</div>
            <div className={styles.category}>{category}</div>
        </div>
    )
}

export default ArticleWithImage