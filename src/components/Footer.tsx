import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { SOCIAL } from "@/config/site-links";

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
              En Iké Asistencia estamos comprometidos a brindar servicios de excelencia cumpliendo todos
              los requisitos aplicables, asimismo a superar la expectativa de nuestros clientes y usuarios.
              Por ello, trabajamos día a día en mejorar la calidad de nuestros servicios de asistencia.
            </p>
            <p>
              Contamos con personal especializado, recursos tecnológicos de vanguardia y una amplia red de
              proveedores para poder afirmar a nuestros clientes: “No se preocupe, su problema queda en
              nuestras manos”.
            </p>
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
