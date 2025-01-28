import styles from './LinkButton.module.css';

export default function LinkButton({ href, children, variant = 'primary' }) {
  return (
    <a
      className={`${styles.root} ${variant === 'primary' ? styles.primary : styles.secondary}`}
      href={href}
    >
      {children}
    </a>
  );
}
