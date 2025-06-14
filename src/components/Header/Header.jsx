import Link from "next/link";
import styles from './Header.module.css';

export default function Header(){
    return(
        <header className={styles.containerHeader}>
            <div className={styles.containerHeaderBoxTitle}>
                <Link href='/' className={styles.containerHeaderTitle}>
                        <h1>Junior <span>Barber</span></h1>
                </Link>
            </div>
        </header>
    )
}