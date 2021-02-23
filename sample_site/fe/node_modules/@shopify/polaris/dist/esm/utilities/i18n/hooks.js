import { useContext } from 'react';
import { MissingAppProviderError } from '../errors.js';
import { I18nContext } from './context.js';

function useI18n() {
  const i18n = useContext(I18nContext);

  if (!i18n) {
    throw new MissingAppProviderError('No i18n was provided.');
  }

  return i18n;
}

export { useI18n };
