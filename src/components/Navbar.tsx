"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${menuOpen ? styles.menuOpen : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" onClick={close}>
            <Image
              src="/assets/logo-white.svg"
              alt="VAS Logo"
              width={140}
              height={60}
              priority
              className={styles.logoImage}
            />
          </Link>
        </div>

        <div className={styles.links}>
          <Link href="#registrate">Registrate</Link>
          <Link href="#planes">Planes</Link>
          <Link href="#faq">FAQ</Link>
        </div>

        <div className={styles.actions}>
          <button className={styles.contactBtn}>Contacto</button>
          <button className={styles.navButton}>Registrarse</button>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ""}`} />
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <Link href="#registrate" onClick={close}>Registrate</Link>
        <Link href="#planes" onClick={close}>Planes</Link>
        <Link href="#faq" onClick={close}>FAQ</Link>
        <div className={styles.mobileDivider} />
        <button className={styles.mobileContactBtn} onClick={close}>Contacto</button>
        <button className={styles.mobileRegisterBtn} onClick={close}>Registrarse</button>
      </div>
    </nav>
  );
}
