import { useState } from 'react';

export const useModal = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const toggle = (bool: boolean) => setIsShown(!bool);
  return {
    isShown,
    toggle,
  };
};