import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // special, attractive, fascinating
    resources: {
      en: {
        translation: {
          apartments: "Apartments",
          res: "Restaurant",
          aboutus: "About us",
          contacts: "Contacts",
          mainTitle: "A place, where holiday becomes ",
          adj01: 'special',
          adj02: 'attractive',
          adj03: 'fascinating',
          forReservations: "For reservations: ",
          ourApartments: "Our apartments",
          bookNowBtn: "Book now",
          contactsAddress:
            "Mediteranska St., 15, Budva, Montenegro",
          contactsHeading: "Our contacts",
        },
      },
      bg: {
        translation: {
          apartments: "Апартаменти",
          res: "Ресторант",
          aboutus: "За нас",
          contacts: "Контакти",
          mainTitle: "Място, където почивка се стана много ",
          adj01: 'специална',
          adj02: 'хубава',
          adj03: 'прекрасна',
          forReservations: "За резервации: ",
          ourApartments: "Нашите апартаменти",
          bookNowBtn: "Резервирай сега",
          contactsAddress:
            'Медитаранска ул., 15, Будва, Черна Гора ',
          contactsHeading: "Нашите контакти",
        },
      },
      de: {
        translation: {
          apartments: "Wohnungen",
          res: "Restaurant",
          aboutus: "Über uns",
          contacts: "Kontakten",
          mainTitle: "Ein Ort, an dem Urlaub zu etwas Besonderem ",
          adj01: 'besonders',
          adj02: 'attraktiv',
          adj03: 'faszinierend',
          forReservations: "Über die Buchung: ",
          ourApartments: "Unsere Wohnungen",
          bookNowBtn: "Buchen Sie jetzt",
          contactsAddress:
            "Mediteranska 35, Budva, Tschernogorien",
          contactsHeading: "Unsere Kontakte",
        },
      },
      ru: {
        translation: {
          apartments: "Апартаменты",
          res: "Ресторан",
          aboutus: "О нас",
          contacts: "Контакты",
          mainTitle: "Место, где отдых становится",
          adj01: 'прекрасным',
          adj02: 'восхитительным',
          adj03: 'незабываемым',
          forReservations: "Бронирование: ",
          ourApartments: "Наши апартаменты",
          bookNowBtn: "Забронировать сейчас",
          contactsAddress:
            "ул. Медетаранская, 35, Будва, Черногория",
          contactsHeading: "Наши контакты",
        },
      },
    },
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
