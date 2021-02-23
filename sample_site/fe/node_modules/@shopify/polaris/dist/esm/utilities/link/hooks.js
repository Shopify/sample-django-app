import { useContext } from 'react';
import { LinkContext } from './context.js';

function useLink() {
  return useContext(LinkContext);
}

export { useLink };
