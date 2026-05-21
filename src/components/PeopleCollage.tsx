import Image from "next/image";
import styles from "./PeopleCollage.module.css";

const peopleImages = Array.from({ length: 10 }, (_, index) => ({
  src: `/assets/people-collage/person-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: "",
}));

export default function PeopleCollage() {
  return (
    <section className={styles.section} aria-label="Comunidad VAS">
      <div className={styles.collage} aria-hidden>
        {peopleImages.map((image, index) => (
          <div key={image.src} className={styles.tile}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 34vw, 150px"
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
