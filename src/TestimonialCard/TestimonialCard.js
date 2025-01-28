import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import quote from '../images/quote.png';
import styles from './TestimonialCard.module.css';

export default function TestimonialCard({
  testimonialText,
  photo,
  instaLink,
  customerName,
  customerDescription,
}) {
  return (
    <div className={styles.root}>
      <img src={quote} alt="quote icon" className={styles.quoteIcon} />
      <p className={styles.testimonialText}>{testimonialText}</p>
      <div className={styles.customerPhotoBackground}>
        <img src={photo} alt="customer" className={styles.customerPhoto} />
      </div>
      <div className={styles.customerDetails}>
        <p>
          <strong>{customerName}</strong>&nbsp;
          <a href={instaLink}>
            <FontAwesomeIcon icon={faLinkedin} className={styles.instaIcon} />
          </a>
          <br /> {customerDescription}
        </p>
      </div>
    </div>
  );
}
