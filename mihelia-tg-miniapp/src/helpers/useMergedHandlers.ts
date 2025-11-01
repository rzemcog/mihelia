import { useMemo } from 'preact/hooks';

export function useMergedHandlers(handlersA, handlersB) {
  return useMemo(() => {
    const combined = { ...handlersA };
    
    for (const key in handlersB) {
      if (handlersB.hasOwnProperty(key)) {
        const handlerA = handlersA[key];
        const handlerB = handlersB[key];
        
        combined[key] = (...args) => {
          handlerA?.(...args);
          handlerB?.(...args);
        };
      }
    }
    
    return combined;
  }, [handlersA, handlersB]);
}