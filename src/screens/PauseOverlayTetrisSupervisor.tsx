// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pause Overlay - Tetris Supervisor
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, RefreshCw } from "lucide-react";


export type PauseOverlayTetrisSupervisorActionId = "resume-1" | "restart-2" | "return-to-main-menu-3";

export interface PauseOverlayTetrisSupervisorProps {
  actions?: Partial<Record<PauseOverlayTetrisSupervisorActionId, () => void>>;
}

export function PauseOverlayTetrisSupervisor({ actions }: PauseOverlayTetrisSupervisorProps) {
  return (
    <>
      {/* Simulated background canvas (The Game) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center p-xl game-grid-bg opacity-30">
      {/* Abstract representation of the game board in the background */}
      <div className="w-full max-w-2xl h-[819px] border border-outline-variant rounded-lg flex flex-col p-lg gap-sm relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-container-highest/50 rounded-lg"></div>
      </div>
      </div>
      {/* Pause Overlay Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center modal-backdrop bg-background/80 p-lg">
      {/* Modal Container */}
      <div className="w-full max-w-md bg-surface-container border-2 border-primary-container rounded-lg p-xl flex flex-col items-center gap-xl relative shadow-2xl">
      {/* Modal Header */}
      <div className="flex flex-col items-center gap-sm text-center w-full">
      <Circle className="text-4xl text-primary opacity-80 mb-sm" aria-hidden={true} focusable="false" />
      <h1 className="font-display-arcade text-display-arcade text-secondary tracking-tighter drop-shadow-[0_0_8px_rgba(74,225,118,0.5)]">GAME PAUSED</h1>
      <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-primary-container to-transparent mt-xs"></div>
      </div>
      {/* Secondary HUD Panel: Current Stats */}
      <div className="w-full grid grid-cols-2 gap-md mt-sm">
      {/* Score Card */}
      <div className="bg-surface border border-outline-variant p-md rounded flex flex-col gap-xs relative group overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-surface-container-highest"></div>
      <span className="font-label-compact text-label-compact text-on-surface-variant uppercase tracking-widest">SCORE</span>
      <span className="font-data-mono text-data-mono text-primary group-hover:text-primary-fixed transition-colors">042,890</span>
      </div>
      {/* Level Card */}
      <div className="bg-surface border border-outline-variant p-md rounded flex flex-col gap-xs relative group overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-surface-container-highest"></div>
      <span className="font-label-compact text-label-compact text-on-surface-variant uppercase tracking-widest">LEVEL</span>
      <span className="font-data-mono text-data-mono text-secondary group-hover:text-secondary-fixed transition-colors">08</span>
      </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col w-full gap-md mt-md">
      {/* Primary Action: Resume */}
      <button className="w-full h-14 bg-transparent border-2 border-secondary text-secondary font-h2-hud text-h2-hud flex items-center justify-center gap-sm hover:bg-secondary/10 hover:shadow-[0_0_15px_rgba(74,225,118,0.3)] transition-colors duration-150 active:bg-secondary/30 active:scale-[0.98] rounded group" type="button" data-action-id="resume-1" onClick={actions?.["resume-1"]}>
      <Play className="text-secondary group-hover:scale-110 transition-transform" aria-hidden={true} focusable="false" />
                          Resume
                      </button>
      {/* Secondary Action: Restart */}
      <button className="w-full h-12 bg-transparent border border-outline-variant text-on-surface font-body-bold text-body-bold flex items-center justify-center gap-sm hover:bg-surface-container-highest hover:border-outline transition-colors duration-150 active:scale-[0.98] rounded" type="button" data-action-id="restart-2" onClick={actions?.["restart-2"]}>
      <RefreshCw className="text-on-surface-variant" aria-hidden={true} focusable="false" />
                          Restart
                      </button>
      {/* Secondary Action: Return to Main Menu */}
      <button className="w-full h-12 bg-transparent border border-outline-variant text-on-surface font-body-bold text-body-bold flex items-center justify-center gap-sm hover:bg-surface-container-highest hover:border-outline transition-colors duration-150 active:scale-[0.98] rounded" type="button" data-action-id="return-to-main-menu-3" onClick={actions?.["return-to-main-menu-3"]}>
      <Circle className="text-on-surface-variant" aria-hidden={true} focusable="false" />
                          Return to Main Menu
                      </button>
      </div>
      {/* Minimal decorative corners */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-outline-variant rounded-tl-sm -translate-x-1 -translate-y-1"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-outline-variant rounded-tr-sm translate-x-1 -translate-y-1"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-outline-variant rounded-bl-sm -translate-x-1 translate-y-1"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-outline-variant rounded-br-sm translate-x-1 translate-y-1"></div>
      </div>
      </div>
    </>
  );
}
