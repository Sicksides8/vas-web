"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./AppShowcase.module.css";

const screens = [
  { src: "/assets/app-screen-1.png", title: "Home" },
  { src: "/assets/app-screen-2.png", title: "Tarifas" },
  { src: "/assets/app-screen-3.png", title: "Panel Conductor" }
];

export default function AppShowcase() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2>Una experiencia <span className="primary-text">diseñada</span> para ti</h2>
          <p>Limpia, intuitiva y potente. Todo lo que necesitas en la palma de tu mano.</p>
        </div>

        <div className={styles.showcase}>
          {screens.map((screen, index) => (
            <motion.div 
              key={index}
              className={styles.screenWrapper}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className={styles.phoneFrame}>
                <Image 
                  src={screen.src} 
                  alt={screen.title} 
                  width={300} 
                  height={600} 
                  className={styles.screenImage}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
