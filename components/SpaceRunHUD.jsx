'use client';

export default function SpaceRunHUD({
  countdown,
  phase,
  distance,
  xp,
  yearLabel,
  floatingXp,
  summary,
  onExit,
}) {
  return (
    <div className="space-run-ui pointer-events-none absolute inset-0 z-[10001]">
      <div className="space-run-scanlines" />

      <div className="flex items-start justify-between px-4 pb-0 pt-4 text-white md:px-8 md:pt-7">
        <div className="space-run-hud-panel">
          <p className="space-run-hud-label">RUN DISTANCE</p>
          <p className="space-run-hud-value">{Math.floor(distance)}M</p>
        </div>

        <div className="space-run-hud-panel text-right">
          <p className="space-run-hud-label">XP</p>
          <p className="space-run-hud-value">{xp}</p>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center md:bottom-8">
        <p className="space-run-year-label">{yearLabel}</p>
        {floatingXp && <p className="space-run-floating-xp">{floatingXp}</p>}
      </div>

      <button
        type="button"
        onClick={onExit}
        className="pointer-events-auto absolute bottom-5 right-4 text-[10px] uppercase tracking-[0.32em] text-slate-200 transition-opacity hover:opacity-100 md:bottom-8 md:right-8"
      >
        ESC / TAP TO EXIT
      </button>

      {countdown && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <p className="space-run-countdown">{countdown}</p>
        </div>
      )}

      {phase === 'summary' && summary && (
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="space-run-summary pointer-events-auto">
            <p className="space-run-summary-kicker">RUN COMPLETE</p>
            <h3 className="space-run-summary-title">Summary Readout</h3>
            <p className="space-run-summary-copy">
              Distance: {Math.floor(summary.distance)}m | Projects Unlocked: {summary.collected} | XP: {summary.xp}
            </p>
            <button type="button" onClick={onExit} className="ghost-btn mt-6 w-full justify-center">
              Return To Portfolio
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
