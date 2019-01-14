import { addLocaleData } from 'react-intl';
import pt from 'react-intl/locale-data/pt';
import en from 'react-intl/locale-data/en';
import messages from './messages';

addLocaleData([...pt, ...en]);

let defaultLocale = (navigator.languages && navigator.languages[0])
  || navigator.language
  || navigator.userLanguage
  || 'pt-BR';

if (!messages[defaultLocale]) {
  defaultLocale = 'pt-BR';
}

const getMessagesByLocale = locale => messages[locale];
const getMessages = () => messages[defaultLocale];
const availableLanguages = {
  pt: 'pt-BR',
  en: 'en-US'
};

export default {
  messages: getMessages(),
  locale: defaultLocale,
  getMessagesByLocale,
  getMessages,
  availableLanguages
};
