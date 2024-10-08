import { useRef, useEffect } from 'react';
function usePrevRoute(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
export {
  usePrevRoute
}