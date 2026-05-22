import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { SOCIAL, WHATSAPP_URL } from "@/config/site-links";

const externalLinkProps = {
  target: "_blank" as const,
  rel: "noopener noreferrer",
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.topLine} />

        <div className={styles.headerRow}>
          <div className={styles.brandBlock}>
            <Image src="/assets/logo.png" alt="VAS" width={170} height={70} className={styles.logo} />
            <div>
              <h2>VAS ARGENTINA</h2>
              <p>
                <a href={WHATSAPP_URL} {...externalLinkProps}>
                  WhatsApp: +54 9 11 6456-0326
                </a>
              </p>
            </div>
          </div>

          <div className={styles.socialBlock}>
            <h3>Seguinos</h3>
            <div className={styles.socials}>
              <Link href={SOCIAL.instagram} aria-label="Instagram" {...externalLinkProps}>
                <Instagram size={18} />
              </Link>
              <Link href={SOCIAL.facebook} aria-label="Facebook" {...externalLinkProps}>
                <Facebook size={18} />
              </Link>
              <Link href={SOCIAL.linkedin} aria-label="LinkedIn" {...externalLinkProps}>
                <Linkedin size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.legalGrid}>
          <div className={styles.legalText}>
            <p>
              En VAS estamos comprometidos a brindar servicios de excelencia cumpliendo todos los
              requisitos aplicables, asimismo a superar la expectativa de nuestros usuarios. Por ello,
              vamos a trabajar día a día en mejorar la calidad de nuestros servicios de viajes.
            </p>
            <p>
              Contamos con personal especializado y recursos tecnológicos de vanguardia para poder
              garantizar la mejor experiencia para todos.
            </p>
            <p className={styles.tagline}>Si vas, vamos.</p>
            <p>
              Defensa de las y los Consumidores, para reclamos <Link href="#">ingrese aquí</Link>
            </p>
            <button className={styles.unsubscribeBtn}>Solicitar baja</button>
          </div>

          <div className={styles.linksBlock}>
            <h3>ENLACES</h3>
            <Link href="#">Aviso Legal y de privacidad</Link>
          </div>

          <div className={styles.qrBlock}>
            <Image src="/assets/aaip-qr.svg" alt="Código QR AAIP" width={112} height={112} />
          </div>
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/footer-wave.svg"
        alt=""
        aria-hidden
        className={styles.wave}
      />
    </footer>
  );
}
