import Link from "next/link";
import styles from './header.module.css';

export default function Header() {
    return (
        <div>
            <header className={styles.header}>
                <Link href='/'>Home</Link>
                <Link href='/contatos'>Contatos</Link>
                <Link href='/repositorios'>Repositórios</Link>
                <Link href='/dashboard'>Dashboard</Link>
                <br /><br />
            </header>
            <hr />
        </div>

    )
}