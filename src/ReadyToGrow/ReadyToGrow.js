import LinkButton from '../LinkButton/LinkButton';
import styles from './ReadyToGrow.module.css';

export default function ReadyToGrow() {
  return (
    <div className={styles.root}>
      <h2>Ready to grow?</h2>
      <p className={styles.growParagraph}>
        Let’s talk about the results I can get for your business. Free of jargon
        and without bullshit bingo.
      </p>
      <LinkButton href="/">Get in touch</LinkButton>
    </div>
  );
}
