import Image from "next/image";
import styles from "./FAQ.module.css";

export default function FAQ() {
  return (
    <section id="faq" className={styles.section}>
      <div className={styles.watermark} aria-hidden>
        <Image
          src="/assets/logo-transparent.png"
          alt=""
          width={900}
          height={380}
          className={styles.watermarkImg}
        />
      </div>
      <div className={`container ${styles.inner}`}>
        <h2>Preguntas Frecuentes</h2>
        <div className={styles.copy}>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p>
          <p>nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat</p>
          <p>volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>
          <p>ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse</p>
        </div>
      </div>
    </section>
  );
}
