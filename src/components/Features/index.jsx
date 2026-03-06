import styles from './features.module.css'
import Recent from '../Recent'
import MainArticle from '../MainArticle'
import Sports from '../Sports'

import {mainArticle} from '../../data/data'

const Features = () => {
    return (
        <div className={styles.features}>
            <Recent />
            <MainArticle {...mainArticle} />
            <Sports />
        </div>
    )
}

export default Features