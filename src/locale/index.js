import { i18nActions } from 'redux-react-i18n';
import enus from './en';
import zhtw from './zhtw';
import zhcn from './zhcn';

// get default browser language
const browserLang = (navigator.language || navigator.userLanguage).replace('-', '').toLowerCase();
let userLang = 'enus';
switch (browserLang) {
  case 'zhtw':
  case 'enus':
  case 'zhcn':
    userLang = browserLang;
    break;
  default:
}

const dictionary = { enus, zhtw, zhcn };
const languages = [
  { code: 'enus', name: 'English' },
  { code: 'zhtw', name: '繁體中文'},
  { code: 'zhcn', name: '简体中文'},
];

const initialLocal = (store) => {
  store.dispatch(i18nActions.setDictionaries(dictionary));
  store.dispatch(i18nActions.setLanguages(languages));
  store.dispatch(i18nActions.setCurrentLanguage(userLang));
};

export default initialLocal;
