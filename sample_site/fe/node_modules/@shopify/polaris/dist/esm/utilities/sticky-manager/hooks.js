import { useContext } from 'react';
import { MissingAppProviderError } from '../errors.js';
import { StickyManagerContext } from './context.js';

function useStickyManager() {
  const stickyManager = useContext(StickyManagerContext);

  if (!stickyManager) {
    throw new MissingAppProviderError('No StickyManager was provided.');
  }

  return stickyManager;
}

export { useStickyManager };
