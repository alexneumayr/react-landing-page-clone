import service1 from '../images/service1.png';
import service2 from '../images/service2.png';
import service3 from '../images/service3.png';
import LinkButton from '../LinkButton/LinkButton';
import styles from './Services.module.css';

export default function AboutMe() {
  return (
    <div className={styles.root}>
      <div className={styles.servicesContainer}>
        <h2>Google Ads services</h2>
        <div className={styles.serviceArea}>
          <div className={`${styles.serviceCard} ${styles.variant1}`}>
            <img src={service1} alt="service icon" />
            <h3>Outsource Google Ads</h3>
            <p>
              I get the most out of your Google Ads campaigns. Let me setup,
              manage and optimize your account.
            </p>
            <LinkButton href="/" variant="secondary">
              I want to know more
            </LinkButton>
          </div>
          <div className={`${styles.serviceCard} ${styles.variant2}`}>
            <img src={service2} alt="service icon" />
            <h3>Google Ads courses</h3>
            <p>
              Learn proven Google Ads strategies, techniques, and clever hacks I
              use daily to grow my client’s accounts!
            </p>
            <LinkButton href="/" variant="secondary">
              I want to learn Google Ads
            </LinkButton>
          </div>
          <div className={`${styles.serviceCard} ${styles.variant3}`}>
            <img src={service3} alt="service icon" />
            <h3>Google Ads coaching</h3>
            <p>
              Do you have the basics of Google Ads under control and are ready
              to go deeper? I am here for you!
            </p>
            <LinkButton href="/" variant="secondary">
              I want to spar
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}
