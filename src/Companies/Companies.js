import company1 from '../images/company1.png';
import company10 from '../images/company10.png';
import company11 from '../images/company11.png';
import company12 from '../images/company12.png';
import company2 from '../images/company2.png';
import company3 from '../images/company3.png';
import company4 from '../images/company4.png';
import company5 from '../images/company5.png';
import company6 from '../images/company6.png';
import company7 from '../images/company7.png';
import company8 from '../images/company8.png';
import company9 from '../images/company9.png';
import wave from '../images/wave.png';
import styles from './Companies.module.css';

export default function Companies() {
  return (
    <div className={styles.root}>
      <div className={styles.centralElements}>
        <h2>I work with the best companies</h2>
        <img src={wave} alt="wave" />
        <p>May I add you to the list?</p>
        <div className={styles.logoGrid}>
          <img src={company1} alt="partner company" />
          <img src={company2} alt="partner company" />
          <img src={company3} alt="partner company" />
          <img src={company4} alt="partner company" />
          <img src={company5} alt="partner company" />
          <img src={company6} alt="partner company" />
          <img src={company7} alt="partner company" />
          <img src={company8} alt="partner company" />
          <img src={company9} alt="partner company" />
          <img src={company10} alt="partner company" />
          <img src={company11} alt="partner company" />
          <img src={company12} alt="partner company" />
        </div>
      </div>
    </div>
  );
}
