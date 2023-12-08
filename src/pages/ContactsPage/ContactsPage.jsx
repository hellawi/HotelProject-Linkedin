import { useJsApiLoader } from "@react-google-maps/api";
import Map from "../../components/Map/Map";
import styles from "./ContactsPage.module.css";
import { useTranslation } from "react-i18next";

const libraries = ['places']

function ContactsPage() {
  const { t } = useTranslation()
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCdedYgAh67_XaF_y9y9IKQcD_6mSLxFok'
  })
  return (
    <div>
      <h1 className="heading">{t('contactsHeading')}</h1>
      <div className={styles["contacts"]}>
        <div className={styles["contacts-box-01"]}>
          <span style={{ fontSize: 25 }}>{t('forReservations')}</span>
          <br className={styles['br']} />
          <a href="tel:+3820000000" className={styles["text-box"]}>
            <span class="material-symbols-outlined" style={{ marginRight: 10 }}>
              call
            </span>
            +382 00 000 0000
          </a>
          <a href="tel:+382520000000" className={styles["text-box"]}>
            <span class="material-symbols-outlined" style={{ marginRight: 10 }}>
              call
            </span>
            +382 52 000 0000
          </a>
          <a
            href="mailto:test@aaa.com"
            className={styles["text-box"]}
          >
            <span class="material-symbols-outlined" style={{ marginRight: 10 }}>
              mail
            </span>
            test@aaa.com
          </a>
        </div>

        <div className={styles["contacts-box-02"]}>
          <span style={{ fontSize: 25 }}>{t('res')}:</span>
          <br className={styles['br']}  />
          <a href="tel:+382001231212" className={styles["text-box"]}>
            <span class="material-symbols-outlined" style={{ marginRight: 10 }}>
              call
            </span>
            +382 00 123 12 12
          </a>
          <a href="tel:+382520000000" className={styles["text-box"]}>
            <span class="material-symbols-outlined" style={{ marginRight: 10 }}>
              call
            </span>
            +382 52 000 0000
          </a>
          <a href="mailto:rs@aaa.com" className={styles["text-box"]}>
            <span class="material-symbols-outlined" style={{ marginRight: 10 }}>
              mail
            </span>
            rs@aaa.com
          </a>
        </div>
      </div>
      <div className={styles["text-address-box"]}>
        <span className={styles["text-address"]}>
          {t('contactsAddress')}
        </span>
      </div>
      {isLoaded ? <Map /> : <h2>Loading</h2>}
      
    </div>
  );
}
export default ContactsPage;
