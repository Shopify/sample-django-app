import { useContext } from 'react';
import { MissingAppProviderError } from '../errors.js';
import { ScrollLockManagerContext } from './context.js';

function useScrollLockManager() {
  const scrollLockManager = useContext(ScrollLockManagerContext);

  if (!scrollLockManager) {
    throw new MissingAppProviderError('No ScrollLockManager was provided.');
  }

  return scrollLockManager;
}

export { useScrollLockManager };
