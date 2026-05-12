import Image from "next/image";
import { Bike, CarFront, HeartHandshake } from "lucide-react";
import styles from "./RegisterPromo.module.css";

export default function RegisterPromo() {
  return (
    <section id="registrate" className={styles.section} aria-labelledby="register-promo-title">
      <div className={styles.topBand}>
        <div className={`container ${styles.topBandInner}`}>
          <div className={styles.vehicleIcons} aria-hidden>
            <CarFront size={34} strokeWidth={2.6} />
            <Bike size={30} strokeWidth={2.6} />
          </div>
          <p>Registrate y podés ganar una membresía</p>
        </div>
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.watermark} aria-hidden>
          <Image
            src="/assets/logo-transparent.png"
            alt=""
            width={900}
            height={380}
            className={styles.watermarkImg}
          />
        </div>

        <div className={styles.copy}>
          <h2 id="register-promo-title">Si vas, vamos.</h2>
          <p className={styles.subtitle}>Una forma más justa de moverte.</p>
          <p className={styles.bodyText}>
            <strong>VAS</strong> a ser miembro de una app que se propone junto a vos{" "}
            <span>¡cambiar las reglas del juego!</span>
          </p>
          <HeartHandshake className={styles.handshake} size={58} strokeWidth={1.9} aria-hidden />
        </div>

        <div className={styles.phoneArea}>
          <div className={styles.phoneFrame}>
            <Image
              src="/assets/register-section/phone-tarifas.png"
              alt="Mockup de la app VAS para elegir destino y vehículo"
              width={390}
              height={844}
              className={styles.phoneImage}
            />
          </div>
          <div className={styles.arrivalCard}>
            <p>5 minutos</p>
            <span>para la llegada</span>
            <button>Compartir recorrido</button>
          </div>
        </div>

        <div className={styles.routeArea} aria-hidden>
          <CarFront className={styles.routeIcon} size={42} strokeWidth={2.5} />
          <div className={styles.routeGraphic}>
            <Image
              src="/assets/register-section/route-line.png"
              alt=""
              width={560}
              height={130}
              className={styles.routeLine}
            />
            <Image
              src="/assets/isotipo-vas.svg"
              alt=""
              width={130}
              height={130}
              className={styles.routeV}
            />
          </div>
          <Bike className={styles.routeIcon} size={38} strokeWidth={2.5} />
        </div>
      </div>
    </section>
  );
}
