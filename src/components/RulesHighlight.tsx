import Image from "next/image";
import { Star } from "lucide-react";
import styles from "./RulesHighlight.module.css";

export default function RulesHighlight() {
  return (
    <section className={styles.section} aria-labelledby="rules-highlight-heading">
      <div className={`container ${styles.inner}`}>
        <div className={styles.topRow}>
          <div className={styles.isotypeWrap}>
            <Image
              src="/assets/isotipo-vas.svg"
              alt=""
              width={400}
              height={400}
              className={styles.isotype}
            />
          </div>
          <div className={styles.lines}>
            <p id="rules-highlight-heading" className={styles.linePrimary}>
              COMISIÓN 0% SI MANEJÁS.
            </p>
            <p className={styles.linePrimary}>TARIFA FIJA SI VIAJÁS.</p>
            <p className={styles.lineWhite}>MÁS BENEFICIOS PARA TODOS.</p>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p className={styles.tagline}>Alguien tenía que cambiar las reglas!</p>
          <div className={styles.stars} aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={styles.starIcon}
                size={34}
                strokeWidth={0}
                fill="currentColor"
                aria-hidden
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.accentBar} aria-hidden />
    </section>
  );
}
