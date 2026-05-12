import styles from "./Memberships.module.css";
import { Check } from "lucide-react";

const passengerPlans = [
  { name: "Free", price: "0", features: ["Viajes sin comisión", "Soporte básico", "Seguro estándar"] },
  { name: "Premium", price: "9.99", features: ["Viajes prioritarios", "Soporte 24/7", "Seguro premium", "Descuentos en socios"] },
];

const driverPlans = [
  { name: "Pro", price: "19.99", features: ["0% Comisión en todos los viajes", "Soporte dedicado", "Acceso a zona VIP"] },
  { name: "Gold", price: "49.99", features: ["Todo en Pro", "Publicidad prioritaria", "Bonos por desempeño", "Seguro de salud"] },
];

export default function Memberships() {
  return (
    <section id="membership" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2>Elige tu <span className="primary-text">plan</span></h2>
          <p>Membresías diseñadas para maximizar tu ahorro y beneficios.</p>
        </div>

        <div className={styles.categoryHeader}>
          <h3>Vas a viajar</h3>
        </div>
        <div className={styles.grid}>
          {passengerPlans.map((plan, index) => (
            <div key={index} className={styles.card}>
              <h4>{plan.name}</h4>
              <div className={styles.price}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>{plan.price}</span>
                <span className={styles.period}>/mes</span>
              </div>
              <ul className={styles.features}>
                {plan.features.map((f, i) => (
                  <li key={i}><Check size={18} className={styles.check} /> {f}</li>
                ))}
              </ul>
              <button className={plan.name === "Premium" ? "premium-button" : styles.secondaryBtn}>
                Seleccionar
              </button>
            </div>
          ))}
        </div>

        <div className={styles.categoryHeader} style={{ marginTop: "4rem" }}>
          <h3>Vas a conducir</h3>
        </div>
        <div className={styles.grid}>
          {driverPlans.map((plan, index) => (
            <div key={index} className={styles.card}>
              <h4>{plan.name}</h4>
              <div className={styles.price}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>{plan.price}</span>
                <span className={styles.period}>/mes</span>
              </div>
              <ul className={styles.features}>
                {plan.features.map((f, i) => (
                  <li key={i}><Check size={18} className={styles.check} /> {f}</li>
                ))}
              </ul>
              <button className={plan.name === "Gold" ? "premium-button" : styles.secondaryBtn}>
                Seleccionar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
