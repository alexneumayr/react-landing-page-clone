import brownSemicircle from '../images/brownsemicircle.svg';
import photo from '../images/photo.png';
import LinkButton from '../LinkButton/LinkButton';
import styles from './PageTop.module.css';

export default function Header() {
  return (
    <div className={styles.root}>
      <div className={styles.division}>
        <div className={styles.firstGridColumn}>
          <h1>
            Your Google Ads campaigns{' '}
            <span className={styles.underline}>perform better</span> with me
            behind the wheel.
          </h1>
          <p>
            I’ll get the most out of your Google Ads campaigns or teach you the
            intricacies so you can do it yourself!
          </p>
          <LinkButton href="/">I want to outsource Google Ads</LinkButton>
          <div className={styles.photoAndSemicircleMobile}>
            <img src={photo} alt="me" className={styles.photoMobile} />
            <img
              src={brownSemicircle}
              className={styles.semicircle}
              alt="brown background semicircle"
            />
          </div>
        </div>
        <div className={styles.secondGridColumn}>
          <img
            src={brownSemicircle}
            className={styles.semicircle}
            alt="brown background semicircle"
          />
          <img src={photo} alt="me" className={styles.photo} />
        </div>
      </div>
    </div>
  );
}
