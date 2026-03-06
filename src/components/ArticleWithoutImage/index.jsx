import styles from './article.module.css'

const ArticleWithoutImage = ({headline, deck, category}) => {
    return (
        <div className={styles.article}>
            <div className={styles.headline}>{headline}. {deck}</div>
            <div className={styles.category}>{category}</div>
        </div>
    )
}

export default ArticleWithoutImage