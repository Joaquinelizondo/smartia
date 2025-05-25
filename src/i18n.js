// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../locales/en.json';
import es from '../locales/es.json';


i18n
  .use(LanguageDetector) // detecta idioma del navegador
  .use(initReactI18next) // integra con React
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    fallbackLng: 'en', // si no encuentra el idioma, usa inglés
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
