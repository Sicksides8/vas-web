"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MEMBERSHIP_PROMO_COPY } from "@/config/site-links";
import styles from "./Hero.module.css";

/** Hero grande = misma foto que antes era el primer círculo (AdobeStock 436683212). Miniaturas en /public/assets/gallery */
const galleryImages = {
  hero: "/assets/gallery/hero-main.jpg",
  thumbVertical: "/assets/gallery/thumb-vertical.jpg",
  thumbCircleLeft: "/assets/gallery/thumb-circle-left.jpg", // distinta al hero (AdobeStock_294027227)
  thumbCircleRight: "/assets/gallery/thumb-circle-right.jpg",
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgLogoContainer}>
        <Image
          src="/assets/logo-white.svg"
          alt=""
          width={1600}
          height={800}
          className={styles.bgLogo}
        />
      </div>

      <div className={styles.bgWatermark} aria-hidden>
        <Image
          src="/assets/logo-transparent.png"
          alt=""
          width={900}
          height={380}
          className={styles.bgWatermarkImg}
        />
      </div>

      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.logoWrapper}>
              <Image
                src="/assets/logo.png"
                alt="VAS"
                width={320}
                height={120}
                className={styles.mainLogo}
                priority
              />
            </div>

            <h1 className={styles.headline}>
              VAS es una <span className={styles.highlight}>app</span> con un nuevo sistema de
              membresía para tus viajes.
            </h1>

            <p className={styles.subheadline}>
              Cambiamos las reglas para que moverte sea más justo para vos,{" "}
              <span className={styles.bold}>seas conductor o pasajero.</span>
            </p>

            <div className={styles.ctaGroup}>
              <Link href="#pre-lanzamiento" className={styles.primaryBtn}>
                {MEMBERSHIP_PROMO_COPY}
              </Link>
              <button type="button" className={styles.secondaryBtn}>
                Seguí leyendo
              </button>
            </div>

          </motion.div>
        </div>

        <div className={styles.visualColumn}>
          {/* Sin translateY aquí: el transform de motion rompe el layout de next/image con fill */}
          <motion.div
            className={styles.gallery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.12 }}
          >
            <div className={styles.galleryHero}>
              <Image
                src={galleryImages.hero}
                alt="Conductor y pasajeros en un viaje"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className={styles.galleryHeroImg}
                priority
              />
            </div>

            <div className={styles.galleryRow}>
              <div className={styles.thumbRound}>
                <Image
                  src={galleryImages.thumbVertical}
                  alt="Personas en movilidad urbana"
                  fill
                  sizes="(max-width: 1024px) 28vw, 12vw"
                  className={styles.thumbImg}
                />
              </div>
              <div className={styles.thumbRound}>
                <Image
                  src={galleryImages.thumbCircleLeft}
                  alt="Pasajeros en viaje"
                  fill
                  sizes="(max-width: 1024px) 28vw, 12vw"
                  className={styles.thumbImg}
                />
              </div>
              <div className={styles.thumbRound}>
                <Image
                  src={galleryImages.thumbCircleRight}
                  alt="Viaje en auto"
                  fill
                  sizes="(max-width: 1024px) 28vw, 12vw"
                  className={styles.thumbImg}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.mouse} />
      </div>
    </section>
  );
}
