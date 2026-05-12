import Image from "next/image";
import styles from "./Community.module.css";

const members = [
  { name: "Carlos R.", role: "Conductor Gold", image: "https://i.pravatar.cc/150?u=carlos" },
  { name: "Lucía M.", role: "Pasajera Premium", image: "https://i.pravatar.cc/150?u=lucia" },
  { name: "Andrés G.", role: "Conductor Pro", image: "https://i.pravatar.cc/150?u=andres" },
  { name: "Sofía P.", role: "Pasajera", image: "https://i.pravatar.cc/150?u=sofia" },
  { name: "Javier T.", role: "Conductor Gold", image: "https://i.pravatar.cc/150?u=javier" },
  { name: "Marta L.", role: "Pasajera Gold", image: "https://i.pravatar.cc/150?u=marta" }
];

export default function Community() {
  return (
    <section id="community" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2>Únete a la <span className={styles.highlight}>comunidad</span> VAS</h2>
          <p>Miles de personas ya se mueven de forma inteligente y sin comisiones.</p>
        </div>

        <div className={styles.grid}>
          {members.map((member, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={80} 
                  height={80} 
                  className={styles.avatar}
                />
              </div>
              <div className={styles.info}>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
