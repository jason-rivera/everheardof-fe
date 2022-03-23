import styles from './HomePage.module.css';
import { homePageData } from './data';

const HomePage = () => {
  return(
    <div className={styles.homePageContainer}>
      <div className={styles.homePageContent}>
        {
          homePageData.map(item => (
            <div className={styles.homePageImageContainer}>
              <img className={styles.homePageImage} src={item.imageUrl} />
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default HomePage;