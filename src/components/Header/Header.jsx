'use client';
import Link from "next/link";
import styles from './Header.module.css';

import { useState } from "react";

export default function Header(){

    const [menuAberto, setMenuAberto] = useState(false);

    const alternaMenu = () => setMenuAberto(!menuAberto);

    return(
        <header className={styles.containerHeader}>
            <div className={styles.containerHeaderBoxTitle}>
                <Link href='/' className={styles.containerHeaderTitle}>
                        <h1>Junior <span>Barber</span></h1>
                </Link>
            </div>
            <button className={styles.btnMenu} onClick={alternaMenu}>
                ☰
            </button>
            <nav className={`${styles.navMenu} ${menuAberto ? styles.menuAberto : ''}`}>
                <ul>
                    <li>
                        <Link href='/' className={styles.navLinks}>Home</Link>
                    </li>
                    <li>
                        <Link href='/sobre' className={styles.navLinks}>Sobre</Link>
                    </li>
                    <li>
                        <Link href='/servicos' className={styles.navLinks}>Serviços</Link>
                    </li>
                    <li>
                        <a href='#galeria' className={styles.navLinks}>Galeria</a>
                    </li>
                    <li>
                        <a href='#agendamento' className={styles.navLinks}>Agende um Horário</a>
                    </li>
                    <li>
                        <a href='#contato' className={styles.navLinks}>Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}