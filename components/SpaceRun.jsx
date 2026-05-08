'use client';

import { useEffect } from 'react';
import SpaceRunHUD from './SpaceRunHUD';
import { useSpaceRunEngine } from './useSpaceRunEngine';

export default function SpaceRun({ active, cards, heroRef, onClose }) {
  const { mountRef, hud, requestExit } = useSpaceRunEngine({
    active,
    cards,
    heroRef,
    onClosed: onClose,
  });

  useEffect(() => {
    if (!active) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [active]);

  if (!active) return null;

  return (
    <div className="space-run-overlay">
      <div ref={mountRef} className="space-run-canvas" />
      <SpaceRunHUD {...hud} onExit={requestExit} />
    </div>
  );
}
