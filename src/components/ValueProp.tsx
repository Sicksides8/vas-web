import styles from "./ValueProp.module.css";
import { Zap, Shield, Star, Award } from "lucide-react";

const benefits = [
  {
    icon: <Zap size={32} />,
    title: "0% Comisión",
    description: "Para conductores y pasajeros. El precio que ves es el que pagas."
  },
  {
    icon: <Shield size={32} />,
    title: "Seguridad Total",
    description: "Conductores verificados y monitoreo en tiempo real de cada viaje."
  },
  {
    icon: <Star size={32} />,
    title: "Experiencia 5 Estrellas",
    description: "Calidad garantizada en cada trayecto con nuestra comunidad premium."
  },
  {
    icon: <Award size={32} />,
    title: "Membresías Exclusivas",
    description: "Accede a beneficios únicos con nuestros planes personalizados."
  }
];

export default function ValueProp() {
  return (
    <section id="features" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2>¿Por qué elegir <span className="primary-text">VAS</span>?</h2>
          <p>Cambiamos las reglas del juego para que tú ganes más.</p>
        </div>

        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
