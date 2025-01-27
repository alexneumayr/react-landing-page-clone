import me from '../images/me.png';
import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <div className={styles.root}>
      <div className={styles.aboutGrid}>
        <div className={styles.firstGridColumn}>
          <img src={me} alt="me" />
        </div>
        <div className={styles.secondGridColumn}>
          <h2>Hi, I'm Bob Meijer.</h2>
          <p>
            As a Google Ads specialist, I help{' '}
            <strong>ambitious companies</strong> get the most out of Google Ads.
            I work for a select number of clients and am responsible for over
            €1,500,000 per month in ad spend.
          </p>
          <p>
            Over the years, I have had the opportunity to work on more than 100
            Google Ads accounts. Often challenging accounts from great names,
            including&nbsp;
            <strong>
              Weight Watchers, Louwman, Harley Davidson, KPMG, Schoonenberg,{' '}
            </strong>
            and more.
          </p>
          <p>
            I also provide <strong>Google Ads courses</strong> and 1-on-1&nbsp;
            <strong>coaching sessions</strong>. In these, I share my knowledge
            with <strong>novice to very advanced</strong> Google Ads
            advertisers. This way, they learn the intricacies of the business.
          </p>
        </div>
      </div>
    </div>
  );
}
