import styles from "@/components/VaultIcon.module.css";

interface VaultIconProps {
  className?: string;
}

export function VaultIcon({ className = "" }: VaultIconProps) {
  return (
    <span aria-hidden className={`${styles.vaultIcon} ${className}`}>
      <span className={styles.core} />
    </span>
  );
}
