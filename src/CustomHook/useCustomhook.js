import { useState } from 'react';

export function useMyhook() {
  const [active, setactive] = useState(false);
  const handleactive = () => setactive(!active);
  const handletrue = () => setactive(true);
  const handlefalse = () => setactive(false);

  return {
    active,
    handleactive,
    handlefalse,
    handletrue
  };
}