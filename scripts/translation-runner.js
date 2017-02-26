var manageTranslations = require('react-intl-translations-manager').default;


manageTranslations({
  messagesDirectory: 'public/i18n/messages/',
  translationsDirectory: 'public/i18n/lang/',
  languages: ['en', 'fr'] // any language you need 
});