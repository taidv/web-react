import { addLocaleData } from 'react-intl';
import * as enLocaleData from 'react-intl/locale-data/en';
import * as jaLocaleData from 'react-intl/locale-data/ja';
import * as zhLocaleData from 'react-intl/locale-data/zh';

import enTranslationMessages from './translations/en.json';
import jaTranslationMessages from './translations/ja.json';
import zhTranslationMessages from './translations/zh.json';

// tslint:disable-next-line:no-var-requires
const enTranslationMessagesRe = require('./translations/en.json');
// tslint:disable-next-line:no-var-requires
const jaTranslationMessagesRe = require('./translations/ja.json');
// tslint:disable-next-line:no-var-requires
const zhTranslationMessagesRe = require('./translations/zh.json');

addLocaleData([...enLocaleData, ...jaLocaleData, ...zhLocaleData]);

export const appLocales = ['en', 'ja', 'zh'];

export const DEFAULT_LOCALE = 'ja';

type LanguageTranslation = {
    [key: string]: object | string;
};

export const formatTranslationMessages = (locale: string, messages: any) => {
    const defaultFormattedMessages: LanguageTranslation =
        locale !== DEFAULT_LOCALE ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessagesRe) : {};
    return Object.keys(messages).reduce((formattedMessages: string, key: string) => {
        const formattedMessage =
            !messages[key] && locale !== DEFAULT_LOCALE ? defaultFormattedMessages[key] : messages[key];
        return Object.assign(formattedMessages, { [key]: formattedMessage });
    }, {});
};

export const translationMessages = {
    en: formatTranslationMessages('en', enTranslationMessagesRe),
    ja: formatTranslationMessages('ja', jaTranslationMessagesRe),
    zh: formatTranslationMessages('zh', zhTranslationMessagesRe),
};
