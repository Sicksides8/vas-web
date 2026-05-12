"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useId, useState, type ReactNode } from "react";
import styles from "./FAQ.module.css";

type FaqItem = {
  question: string;
  answer: ReactNode;
};

const faqs: FaqItem[] = [
  {
    question: "¿Qué es VAS?",
    answer:
      "VAS es una app de movilidad con un sistema de membresía más conveniente que mejora la forma de viajar para usuarios y conductores.",
  },
  {
    question: "¿Cómo funciona VAS?",
    answer:
      "VAS funciona con un esquema híbrido que combina el modelo tradicional bajo demanda con un novedoso sistema de membresías. Con este sistema, los conductores pueden quedarse con el 100% de la tarifa de cada viaje, mientras que los pasajeros acceden a los precios más convenientes del mercado, junto con muchos beneficios para moverse a donde quieran.",
  },
  {
    question: "¿Cuándo estará disponible la app?",
    answer:
      "La app de VAS estará disponible en el mes de julio de 2026, pero ya podés registrarte desde esta web. Si ya te registraste en nuestra base de datos, te avisaremos por mail o WhatsApp cuando esté disponible para descargar. También podés seguirnos en nuestras redes sociales para enterarte de todas las novedades.",
  },
  {
    question: "¿Cómo puedo registrarme en VAS?",
    answer:
      "En esta página, completá el formulario con tus datos para registrarte. Luego, te avisaremos cuando puedas descargar la app.",
  },
  {
    question: "¿Cuáles son los requisitos para el Registro?",
    answer: (
      <>
        <p className={styles.answerLead}>Los requisitos si sos pasajero son:</p>
        <ul className={styles.answerList}>
          <li>Mayor de 18 años</li>
          <li>Nombre y apellido</li>
          <li>DNI</li>
          <li>Mail</li>
          <li>Teléfono</li>
          <li>Foto de perfil</li>
        </ul>
        <p className={styles.answerLead}>Los requisitos para conductores son:</p>
        <ul className={styles.answerList}>
          <li>Mayor de 18 años</li>
          <li>Nombre y apellido</li>
          <li>DNI</li>
          <li>Mail</li>
          <li>Teléfono</li>
          <li>Registro de conducir</li>
          <li>Auto 2003 en adelante</li>
          <li>Seguro vigente</li>
          <li>Foto de perfil</li>
        </ul>
      </>
    ),
  },
  {
    question: "¿Mis datos están seguros en VAS?",
    answer:
      "Sí, contamos con una política de privacidad para que estés tranquilo de que todos tus datos están 100% seguros.",
  },
  {
    question: "¿Cuánto tiempo dura la membresía?",
    answer:
      "La membresía dura 30 días corridos. Podés pagarla con débito, crédito o, si sos conductor, con las ganancias que generes a través de tus viajes en la app.",
  },
  {
    question: "¿Tengo un período de prueba gratuita?",
    answer:
      "Sí. Cuando elijas una opción de membresía y completes la validación de tus datos de pago, accedés a un período de prueba gratuito de 7 días. Durante ese tiempo, podés disfrutar de todos los beneficios del plan que elijas. El cobro se realizará recién al finalizar el período de prueba, es decir, en el día 8.",
  },
  {
    question: "¿Puedo pagar la membresía antes de que la app esté disponible?",
    answer:
      "Sí, podés pagar la membresía durante el período de pre-lanzamiento de la app (junio de 2026) y acceder a un descuento del 50%, ya sea que vayas a viajar o a manejar con VAS.",
  },
  {
    question: "¿Puedo usar VAS sin una membresía?",
    answer:
      "Sí, podés usar VAS sin pagar una membresía y aun así acceder a muchos beneficios. Si sos conductor, tenés una comisión fija del 9%, y si sos pasajero, podés viajar a precios más convenientes y la posibilidad de ganarte viajes totalmente gratis.",
  },
  {
    question: "Si soy conductor, ¿qué vehículo necesito para manejar en VAS?",
    answer:
      "Podés registrarte para manejar con auto o moto modelo 2003 en adelante. También te vamos a pedir registro de conducir con la categoría correspondiente y seguro vigente.",
  },
  {
    question: "Todavía tengo dudas, ¿dónde puedo comunicarme para evacuarlas?",
    answer: (
      <>
        <p>
          Podés escribirnos por{" "}
          <strong>WhatsApp</strong> (número próximo a publicarse).
        </p>
        <p>
          También en nuestra página web o en nuestras redes sociales como{" "}
          <strong>VAS Movilidad</strong>.
        </p>
      </>
    ),
  },
];

export default function FAQ() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

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
        <div className={styles.accordion} role="region" aria-label="Preguntas frecuentes">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const headerId = `${baseId}-header-${index}`;
            return (
              <div key={headerId} className={`${styles.item} ${open ? styles.itemOpen : ""}`}>
                <h3 className={styles.questionHeading}>
                  <button
                    type="button"
                    id={headerId}
                    className={styles.trigger}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                  >
                    <span className={styles.questionText}>{item.question}</span>
                    <ChevronDown className={styles.chevron} aria-hidden size={22} strokeWidth={2.25} />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  className={styles.panel}
                  hidden={!open}
                >
                  <div className={styles.panelInner}>{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
