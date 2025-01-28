import beachPhoto from '../images/beach.png';
import blueSemicircle from '../images/bluesemicircle.svg';
import LinkButton from '../LinkButton/LinkButton';
import styles from './GetInTouch.module.css';

export default function Header() {
  return (
    <div className={styles.root}>
      <div className={styles.division}>
        <div className={styles.firstGridColumn}>
          <h3>Work with me.</h3>
          <h1>I get the most out of it.</h1>
          <p>
            Let’s talk about the results I can get for your business. Free of
            jargon and without bullshit bingo.
          </p>
          <LinkButton href="/">Get in touch</LinkButton>
          <div className={styles.photoAndSemicircleMobile}>
            <img
              src={beachPhoto}
              alt="me walking on a beach"
              className={styles.photoMobile}
            />
            <img
              src={blueSemicircle}
              className={styles.semicircle}
              alt="blue background semicircle"
            />
          </div>
        </div>
        <div className={styles.secondGridColumn}>
          <img
            src={blueSemicircle}
            className={styles.semicircle}
            alt="blue background semicircle"
          />
          <img
            src={beachPhoto}
            alt="me walking on a beach"
            className={styles.photo}
          />
        </div>
      </div>
    </div>
  );
}
