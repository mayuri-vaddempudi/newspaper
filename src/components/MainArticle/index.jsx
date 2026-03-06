import styles from './main-article.module.css'
import {getImageURL} from '../../utils/functions'

const MainArticle = ({image, headline, deck, story, category}) => {
    return (
        <div className={styles.article} >
            <img src={getImageURL(image)} />
            <h2>{headline}</h2>
            <p>{deck}</p>
            <p>{category}</p>
        </div>
    )
}

export default MainArticle