import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../images/logo.png';
import nl from '../images/nl.png';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.root}>
      <nav className={styles.nav}>
        <img src={logo} alt="Logo" />
        <a href="/" className={styles.menuToggle}>
          <FontAwesomeIcon icon={faBars} />
        </a>
        <ul className={styles.links}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">
              Google Ads Services
              <FontAwesomeIcon
                icon={faChevronDown}
                className={styles.downIcon}
              />
            </a>
          </li>
          <li>
            <a href="/">Google Ads resources</a>
          </li>
          <li>
            <a href="/">About me</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <div className={styles.language}>
              <a href="/">
                <img src={nl} alt="language" />
                NL
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
