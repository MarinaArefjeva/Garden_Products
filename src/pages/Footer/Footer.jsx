import React from "react";
import styles from "./Footer.module.css";
import instagram from "../../assets/images/footer/instagram.svg";
import whatsapp from "../../assets/images/footer/whatsapp.svg";
export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <h1 className={styles.title}>Contact</h1>

          <div className={styles.contacts}>
            <div className={styles.phone}>
              <p className={styles.subheading}>Phone</p>
              <a href="tel" className={styles.telephone}>
                +49 999 999 99 99
              </a>
            </div>
            <div className={styles.socials}>
              <p className={styles.subheading}>Socials</p>
              <img className={styles.instagram} src={instagram} />
              <img className={styles.whatsapp} src={whatsapp} />
            </div>
            <div className={styles.address}>
              <p className={styles.subheading}>Address</p>
              <a href="store_address" className={styles.store_address}>
                Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland
              </a>
            </div>
            <div className={styles.working_hours}>
              <p className={styles.subheading}>Working Hours</p>
              <h1 className={styles.hours}>24 hours a day</h1>
            </div>
          </div>
        </div>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16337.909716636532!2d13.360823980588924!3d52.503668845005535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdd6cfe0f%3A0xb4b0903f299decf1!2sLinkstra%C3%9Fe%202%2F8.%20Etage%2C%2010785%20Berlin!5e0!3m2!1sru!2sde!4v1693068421636!5m2!1sru!2sde"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </footer>
    </>
  );
}
