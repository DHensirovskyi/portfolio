'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLenis } from 'lenis/react';

export default function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    return () => { if ('scrollRestoration' in history) history.scrollRestoration = 'auto'; };
  }, []);

  useEffect(() => {
    lenis?.stop?.();
    lenis?.scrollTo?.(0, { immediate: true, force: true });
    lenis?.start?.();

    if (!lenis) window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, lenis]);

  return null;
}
