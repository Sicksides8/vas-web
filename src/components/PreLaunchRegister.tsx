import { Bike, CarFront } from "lucide-react";
import { MEMBERSHIP_PROMO_COPY, PRE_LAUNCH_FORM_URL } from "@/config/site-links";
import styles from "./PreLaunchRegister.module.css";

export default function PreLaunchRegister() {
  return (
    <section
      id="pre-lanzamiento"
      className={styles.section}
      aria-labelledby="pre-launch-title"
    >
      <div className={styles.topBand}>
        <div className={`container ${styles.topBandInner}`}>
          <div className={styles.vehicleIcons} aria-hidden>
            <CarFront size={34} strokeWidth={2.6} />
            <Bike size={30} strokeWidth={2.6} />
          </div>
          <p>{MEMBERSHIP_PROMO_COPY}</p>
        </div>
      </div>

      <div className={`container ${styles.inner}`}>
        <h2 id="pre-launch-title">Registro pre-lanzamiento</h2>
        <p className={styles.subtitle}>
          Completá el formulario y accedé al 50% de descuento en tu membresía antes del
          lanzamiento de la app en julio de 2026.
        </p>
        <a
          href={PRE_LAUNCH_FORM_URL}
          className={styles.cta}
          target="_blank"
          rel="noopener noreferrer"
        >
          Unirme
        </a>
      </div>
    </section>
  );
}
