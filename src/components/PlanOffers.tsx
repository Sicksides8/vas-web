import Image from "next/image";
import { Bike, CarFront } from "lucide-react";
import {
  CHECKOUT,
  MEMBERSHIP_PROMO_COPY,
  PRE_LAUNCH_FORM_URL,
} from "@/config/site-links";
import styles from "./PlanOffers.module.css";

type Plan = {
  name: string;
  tone: "blue" | "gold";
  description: string;
  price: string;
  cta: string;
  href: string;
  oldPrice?: string;
};

const travelerPlans: Plan[] = [
  {
    name: "VAS Free",
    tone: "blue" as const,
    description:
      "Sumate hoy y accedé a muchos descuentos y beneficios antes que nadie.",
    price: "ARS 0.-",
    cta: "Unirme",
    href: PRE_LAUNCH_FORM_URL,
  },
  {
    name: "VAS Premium",
    tone: "blue" as const,
    description: "1er. viaje GRATIS. Tarifa plana Lunes a Viernes. Beneficios exclusivos VAS.",
    oldPrice: "ARS 18.000.-",
    price: "ARS 9.000.-",
    cta: "Acceder 50% off",
    href: CHECKOUT.travelerPremium,
  },
  {
    name: "VAS Gold",
    tone: "gold" as const,
    description: "1er. viaje GRATIS. Tarifa plana TODOS LOS DÍAS. Beneficios exclusivos VAS.",
    oldPrice: "ARS 28.800.-",
    price: "ARS 14.900.-",
    cta: "Acceder 50% off",
    href: CHECKOUT.travelerGold,
  },
];

const driverPlans: Plan[] = [
  {
    name: "VAS Standar",
    tone: "blue" as const,
    description: "Comisión fija 9% en todos los viajes. Más Beneficios.",
    price: "ARS 0.-",
    cta: "Unirme",
    href: PRE_LAUNCH_FORM_URL,
  },
  {
    name: "VAS Premium",
    tone: "blue" as const,
    description: "Aplica Lunes a Viernes. Comisión 0%. Beneficios exclusivos VAS.",
    oldPrice: "ARS 29.800.-",
    price: "ARS 14.900.-",
    cta: "Acceder 50% off",
    href: CHECKOUT.driverPremium,
  },
  {
    name: "VAS Gold",
    tone: "gold" as const,
    description: "Aplica TODOS LOS DÍAS. Comisión 0%. Beneficios exclusivos VAS.",
    oldPrice: "ARS 39.800.-",
    price: "ARS 19.900.-",
    cta: "Acceder 50% off",
    href: CHECKOUT.driverGold,
  },
];

function PlanCard({ plan, variant }: { plan: Plan; variant: "traveler" | "driver" }) {
  return (
    <article className={`${styles.card} ${variant === "traveler" ? styles.travelerCard : styles.driverCard}`}>
      <div className={styles.cardHeader}>
        <h3 className={plan.tone === "gold" ? styles.goldTitle : undefined}>{plan.name}</h3>
        <Image src="/assets/isotipo-vas.svg" alt="" width={58} height={58} className={styles.cardLogo} />
      </div>
      <p className={styles.description}>{plan.description}</p>
      <div className={styles.cardFooter}>
        <div className={styles.prices}>
          {plan.oldPrice ? <span className={styles.oldPrice}>{plan.oldPrice}</span> : null}
          <strong>{plan.price}</strong>
        </div>
        <a
          href={plan.href}
          className={styles.cta}
          target="_blank"
          rel="noopener noreferrer"
        >
          {plan.cta}
        </a>
      </div>
    </article>
  );
}

export default function PlanOffers() {
  return (
    <section id="planes" className={styles.section} aria-labelledby="plan-offers-title">
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
        <h2 id="plan-offers-title">
          Adquirí hoy <span>tu membresía con 50%</span>
          <br />
          <span>de descuento más beneficios.</span>
        </h2>

        <div className={styles.columns}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>
              <span>VAS</span> A VIAJAR
            </h3>
            <div className={styles.cards}>
              {travelerPlans.map((plan) => (
                <PlanCard key={plan.name} plan={plan} variant="traveler" />
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>
              <span>VAS</span> A CONDUCIR
            </h3>
            <div className={styles.cards}>
              {driverPlans.map((plan) => (
                <PlanCard key={plan.name} plan={plan} variant="driver" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
