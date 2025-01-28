import google from '../images/google.png';
import logoFooter from '../images/logofooter.png';
import microsoft from '../images/microsoft.png';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.root}>
      <div className={styles.footerContainer}>
        <div className={styles.upperFooter}>
          <div className={styles.footerCard}>
            <img src={logoFooter} alt="logo footer" />
            <p>
              Noordijkerveldweg 10 <br />
              7161LW Neede <br />
              Netherlands
            </p>
            <p>
              KvK-number: 78449227
              <br />
              Btw-identificationnumber: NL861402728B01
            </p>
          </div>
          <div className={styles.footerCard}>
            <div className={styles.footerHeading}>
              <h4>Google Ads services</h4>
            </div>
            <ul>
              <li>
                <a href="/">Outsource Google Ads</a>
              </li>
              <li>
                <a href="/">Google Ads audit</a>
              </li>
              <li>
                <a href="/">Google Ads coaching</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerCard}>
            <div className={styles.footerHeading}>
              <h4>Resources</h4>
            </div>
            <ul>
              <li>
                <a href="/">Visit my LinkedIn</a>
              </li>
              <li>
                <a href="/">Google Ads community</a>
              </li>
              <li>
                <a href="/">Google Ads newsletter</a>
              </li>
              <li>
                <a href="/">Google Ads podcast</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerCard}>
            <div className={styles.footerHeading}>
              <h4>General</h4>
            </div>
            <ul>
              <li>
                <a href="/">About me</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Terms and conditions</a>
              </li>
              <li>
                <a href="/">Privacy statement</a>
              </li>
              <li>
                <a href="/">Cookie policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.lowerFooter}>
          <hr />
          <div className={styles.imgContainer}>
            <img src={google} alt="google" />
            <img src={microsoft} alt="microsoft" />
          </div>
        </div>
      </div>
    </div>
  );
}
