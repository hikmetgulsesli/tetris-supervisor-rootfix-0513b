// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Board - Tetris Supervisor
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, RotateCw, Settings } from "lucide-react";


export type GameBoardTetrisSupervisorActionId = "button-1-1" | "button-2-2" | "rotate-3" | "hold-4" | "drop-5" | "pause-6";

export interface GameBoardTetrisSupervisorProps {
  actions?: Partial<Record<GameBoardTetrisSupervisorActionId, () => void>>;
}

export function GameBoardTetrisSupervisor({ actions }: GameBoardTetrisSupervisorProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-lg py-md bg-surface dark:bg-surface border-b border-outline-variant dark:border-outline-variant hidden md:flex">
      <div className="font-display-arcade text-h1-hud text-secondary dark:text-secondary tracking-tighter">
                  TETRIS_SUPERVISOR
              </div>
      <div className="flex items-center gap-sm">
      <button className="text-on-surface-variant dark:text-on-surface-variant hover:bg-primary-container/20 dark:hover:bg-primary-container/20 p-2 rounded-full flex items-center justify-center transition-colors" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant dark:text-on-surface-variant hover:bg-primary-container/20 dark:hover:bg-primary-container/20 p-2 rounded-full flex items-center justify-center transition-colors" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* SideNavBar (Desktop Only) */}
      <nav className="fixed left-0 top-0 h-full w-64 z-40 pt-24 bg-surface-container dark:bg-surface-container border-r border-outline-variant dark:border-outline-variant hidden md:flex flex-col">
      <div className="px-lg pb-md mb-md border-b border-outline-variant/30">
      <div className="font-display-arcade text-h2-hud text-primary dark:text-primary">SUPERVISOR_OS</div>
      <div className="font-label-compact text-label-compact text-on-surface-variant mt-1">V2.04_STABLE</div>
      </div>
      <div className="flex flex-col gap-xs flex-1">
      <a className="border-l-4 border-secondary text-secondary bg-secondary/10 px-md py-sm flex items-center gap-md font-label-compact text-label-compact" href="#">
      <Circle aria-hidden={true} focusable="false" />
                      Command
                  </a>
      <a className="text-on-surface-variant px-md py-sm opacity-70 hover:bg-surface-container-highest dark:hover:bg-surface-container-highest flex items-center gap-md font-label-compact text-label-compact border-l-4 border-transparent" href="#">
      <Circle aria-hidden={true} focusable="false" />
                      Leaderboard
                  </a>
      <a className="text-on-surface-variant px-md py-sm opacity-70 hover:bg-surface-container-highest dark:hover:bg-surface-container-highest flex items-center gap-md font-label-compact text-label-compact border-l-4 border-transparent" href="#">
      <Circle aria-hidden={true} focusable="false" />
                      Archive
                  </a>
      <a className="text-on-surface-variant px-md py-sm opacity-70 hover:bg-surface-container-highest dark:hover:bg-surface-container-highest flex items-center gap-md font-label-compact text-label-compact border-l-4 border-transparent mt-auto mb-md" href="#">
      <Settings aria-hidden={true} focusable="false" />
                      Settings
                  </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col pt-2 md:pt-24 md:pl-64 h-screen w-full relative z-10 pb-20 md:pb-0 px-4 md:px-xl items-center justify-center">
      {/* Game Layout Container */}
      <div className="flex gap-lg h-full max-h-[800px] w-full max-w-container-max justify-center items-start pt-lg">
      {/* Left Column: Hold & Stats */}
      <div className="hidden sm:flex flex-col gap-lg w-48 shrink-0">
      {/* HOLD Module */}
      <div className="hud-module aspect-square flex items-center justify-center mt-6">
      <span className="hud-label font-label-compact text-label-compact">HOLD</span>
      <div className="grid grid-cols-4 grid-rows-2 gap-[2px] w-24 h-12">
      {/* T piece held */}
      <div className="block-cell opacity-0"></div>
      <div className="block-active bg-primary box-shadow-none border-primary-fixed-dim" style={{boxShadow: "0 0 10px theme('colors.primary-fixed-dim')"}}></div>
      <div className="block-cell opacity-0"></div>
      <div className="block-cell opacity-0"></div>
      <div className="block-active bg-primary border-primary-fixed-dim" style={{boxShadow: "0 0 10px theme('colors.primary-fixed-dim')"}}></div>
      <div className="block-active bg-primary border-primary-fixed-dim" style={{boxShadow: "0 0 10px theme('colors.primary-fixed-dim')"}}></div>
      <div className="block-active bg-primary border-primary-fixed-dim" style={{boxShadow: "0 0 10px theme('colors.primary-fixed-dim')"}}></div>
      <div className="block-cell opacity-0"></div>
      </div>
      </div>
      {/* STATS Module */}
      <div className="hud-module flex flex-col gap-md">
      <span className="hud-label font-label-compact text-label-compact">METRICS</span>
      <div className="flex flex-col">
      <span className="font-label-compact text-label-compact text-on-surface-variant">SCORE</span>
      <span className="font-data-mono text-data-mono text-secondary">014,500</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-compact text-label-compact text-on-surface-variant">LINES</span>
      <span className="font-data-mono text-data-mono">032</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-compact text-label-compact text-on-surface-variant">LEVEL</span>
      <span className="font-data-mono text-data-mono text-tertiary">04</span>
      {/* Progress Bar */}
      <div className="w-full h-[4px] bg-surface mt-2">
      <div className="h-full bg-secondary w-3/4"></div>
      </div>
      </div>
      </div>
      </div>
      {/* Center Column: Game Board */}
      <div className="h-full flex flex-col items-center">
      {/* Mobile Score Header */}
      <div className="flex justify-between w-full mb-4 sm:hidden px-2">
      <div className="font-data-mono text-data-mono text-secondary">014,500</div>
      <div className="font-data-mono text-data-mono text-tertiary">LVL 04</div>
      </div>
      <div className="tetris-grid h-full max-h-full shrink-1">
      {/* Row 1-14 (Empty mostly) */}
      
      {/* Row 15: Active Piece (S-Piece) */}
      <div className="block-cell"></div>
      <div className="block-cell"></div>
      <div className="block-cell"></div>
      <div className="block-cell"></div>
      <div className="block-cell"></div>
      <div className="block-active"></div>
      <div className="block-active"></div>
      <div className="block-cell"></div>
      <div className="block-cell"></div>
      <div className="block-cell"></div>
      {/* Row 16 */}
      <div className="block-cell"></div>
      <div className="block-cell"></div>
      <div className="block-cell"></div>
      <div className="block-cell"></div>
      <div className="block-active"></div>
      <div className="block-active"></div>
      <div className="block-cell"></div>
      <div className="block-cell"></div>
      <div className="block-cell"></div>
      <div className="block-cell"></div>
      {/* Row 17 (Ghost Piece) */}
      <div className="block-cell"></div>
      <div className="block-cell"></div>
      <div className="block-cell"></div>
      <div className="block-cell"></div>
      <div className="block-cell"></div>
      <div className="block-ghost"></div>
      <div className="block-ghost"></div>
      <div className="block-cell"></div>
      <div className="block-cell"></div>
      <div className="block-cell"></div>
      {/* Row 18 */}
      <div className="block-cell"></div>
      <div className="block-cell"></div>
      <div className="block-cell"></div>
      <div className="block-cell"></div>
      <div className="block-ghost"></div>
      <div className="block-ghost"></div>
      <div className="block-cell"></div>
      <div className="block-cell"></div>
      <div className="block-cell"></div>
      <div className="block-cell"></div>
      {/* Row 19 (Placed Blocks) */}
      <div className="block-placed"></div>
      <div className="block-placed"></div>
      <div className="block-cell"></div>
      <div className="block-cell"></div>
      <div className="block-placed"></div>
      <div className="block-placed"></div>
      <div className="block-placed"></div>
      <div className="block-cell"></div>
      <div className="block-placed"></div>
      <div className="block-placed"></div>
      {/* Row 20 */}
      <div className="block-placed"></div>
      <div className="block-placed"></div>
      <div className="block-placed"></div>
      <div className="block-cell"></div>
      <div className="block-placed"></div>
      <div className="block-placed"></div>
      <div className="block-placed"></div>
      <div className="block-placed"></div>
      <div className="block-placed"></div>
      <div className="block-placed"></div>
      </div>
      </div>
      {/* Right Column: Next & Actions */}
      <div className="hidden sm:flex flex-col gap-lg w-48 shrink-0">
      {/* NEXT Module */}
      <div className="hud-module h-64 flex flex-col items-center justify-start gap-md mt-6">
      <span className="hud-label font-label-compact text-label-compact">NEXT</span>
      {/* Next 1 (I piece) */}
      <div className="grid grid-cols-4 grid-rows-1 gap-[2px] w-24 h-6 mt-4">
      <div className="block-placed !bg-tertiary border-tertiary-fixed-dim" style={{boxShadow: "0 0 5px theme('colors.tertiary')"}}></div>
      <div className="block-placed !bg-tertiary border-tertiary-fixed-dim" style={{boxShadow: "0 0 5px theme('colors.tertiary')"}}></div>
      <div className="block-placed !bg-tertiary border-tertiary-fixed-dim" style={{boxShadow: "0 0 5px theme('colors.tertiary')"}}></div>
      <div className="block-placed !bg-tertiary border-tertiary-fixed-dim" style={{boxShadow: "0 0 5px theme('colors.tertiary')"}}></div>
      </div>
      {/* Next 2 (O piece) */}
      <div className="grid grid-cols-2 grid-rows-2 gap-[2px] w-12 h-12 mt-4 opacity-70">
      <div className="block-placed !bg-error border-error-container"></div>
      <div className="block-placed !bg-error border-error-container"></div>
      <div className="block-placed !bg-error border-error-container"></div>
      <div className="block-placed !bg-error border-error-container"></div>
      </div>
      </div>
      </div>
      </div>
      </main>
      {/* BottomNavBar (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-md pb-sm pt-xs bg-surface-container-low dark:bg-surface-container-low border-t-2 border-outline-variant dark:border-outline-variant rounded-t-xl md:hidden">
      <button className="flex flex-col items-center justify-center text-on-surface-variant p-2 opacity-60 hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-transform" type="button" data-action-id="rotate-3" onClick={actions?.["rotate-3"]}>
      <RotateCw  style={{fontVariationSettings: "'FILL' 1"}} className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-compact text-label-compact">Rotate</span>
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant p-2 opacity-60 hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-transform" type="button" data-action-id="hold-4" onClick={actions?.["hold-4"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-compact text-label-compact">Hold</span>
      </button>
      <button className="flex flex-col items-center justify-center bg-secondary/20 text-secondary rounded-lg p-2 border border-secondary/50 hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-transform scale-90" type="button" data-action-id="drop-5" onClick={actions?.["drop-5"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-compact text-label-compact">Drop</span>
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant p-2 opacity-60 hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-transform" type="button" data-action-id="pause-6" onClick={actions?.["pause-6"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-compact text-label-compact">Pause</span>
      </button>
      </nav>
    </>
  );
}
