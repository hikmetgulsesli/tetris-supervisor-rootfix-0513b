// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu - Tetris Supervisor
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, Settings } from "lucide-react";


export type MainMenuTetrisSupervisorActionId = "start-game-1" | "high-scores-2" | "settings-3" | "help-4";

export interface MainMenuTetrisSupervisorProps {
  actions?: Partial<Record<MainMenuTetrisSupervisorActionId, () => void>>;
}

export function MainMenuTetrisSupervisor({ actions }: MainMenuTetrisSupervisorProps) {
  return (
    <>
      <div className="absolute inset-0 bg-tetromino-pattern z-0 opacity-50"></div>
      <div className="absolute inset-0 scanline z-10 pointer-events-none opacity-30"></div>
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center p-xl">
      <div className="mb-xl text-center">
      <h1 className="font-display-arcade text-display-arcade text-secondary tracking-tighter glow-secondary p-md border border-outline-variant bg-surface-container/50 backdrop-blur-sm rounded">
                      TETRIS_SUPERVISOR
                  </h1>
      <p className="font-label-compact text-label-compact text-on-surface-variant mt-sm">V2.04_STABLE // SYSTEM READY</p>
      </div>
      <div className="flex flex-col gap-md w-full max-w-[400px]">
      <button className="relative group w-full flex items-center justify-between px-lg py-md border-2 border-secondary bg-transparent hover:bg-secondary/10 transition-colors duration-100 rounded focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-4 focus:ring-offset-background" type="button" data-action-id="start-game-1" onClick={actions?.["start-game-1"]}>
      <span className="font-label-compact text-data-mono text-secondary tracking-widest group-hover:text-secondary-fixed transition-colors">START_GAME</span>
      <Play className="text-secondary group-hover:text-secondary-fixed transition-colors" aria-hidden={true} focusable="false" />
      </button>
      <button className="relative group w-full flex items-center justify-between px-lg py-md border border-outline-variant bg-surface/50 hover:bg-surface-container-high transition-colors duration-100 rounded focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-4 focus:ring-offset-background" type="button" data-action-id="high-scores-2" onClick={actions?.["high-scores-2"]}>
      <span className="font-label-compact text-data-mono text-on-surface group-hover:text-primary transition-colors">HIGH_SCORES</span>
      <Circle className="text-on-surface-variant group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      </button>
      <button className="relative group w-full flex items-center justify-between px-lg py-md border border-outline-variant bg-surface/50 hover:bg-surface-container-high transition-colors duration-100 rounded focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-4 focus:ring-offset-background" type="button" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <span className="font-label-compact text-data-mono text-on-surface group-hover:text-primary transition-colors">SETTINGS</span>
      <Settings className="text-on-surface-variant group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      </button>
      <button className="relative group w-full flex items-center justify-between px-lg py-md border border-outline-variant bg-surface/50 hover:bg-surface-container-high transition-colors duration-100 rounded focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-4 focus:ring-offset-background" type="button" data-action-id="help-4" onClick={actions?.["help-4"]}>
      <span className="font-label-compact text-data-mono text-on-surface group-hover:text-primary transition-colors">HELP</span>
      <Circle className="text-on-surface-variant group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="absolute bottom-md left-md">
      <p className="font-label-compact text-label-compact text-outline-variant">STATUS: ONLINE</p>
      </div>
      <div className="absolute bottom-md right-md text-right">
      <p className="font-label-compact text-label-compact text-outline-variant">USER: ADMIN_01</p>
      </div>
      </div>
    </>
  );
}
