// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Controls Help - Tetris Supervisor
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Circle, RotateCw, Settings } from "lucide-react";


export type ControlsHelpTetrisSupervisorActionId = "button-1-1" | "button-2-2" | "back-to-menu-3";

export interface ControlsHelpTetrisSupervisorProps {
  actions?: Partial<Record<ControlsHelpTetrisSupervisorActionId, () => void>>;
}

export function ControlsHelpTetrisSupervisor({ actions }: ControlsHelpTetrisSupervisorProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-surface fixed top-0 left-0 w-full z-50 flex justify-between items-center px-lg py-md border-b border-outline-variant dark:border-outline-variant">
      <div className="font-display-arcade text-h1-hud text-secondary dark:text-secondary tracking-tighter">
                  TETRIS_SUPERVISOR
              </div>
      <div className="flex gap-md">
      <button className="text-on-surface-variant dark:text-on-surface-variant hover:bg-primary-container/20 dark:hover:bg-primary-container/20 p-2 rounded-full transition-colors" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant dark:text-on-surface-variant hover:bg-primary-container/20 dark:hover:bg-primary-container/20 p-2 rounded-full transition-colors" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* SideNavBar (Web) */}
      <nav className="hidden md:flex bg-surface-container dark:bg-surface-container flex-col border-r border-outline-variant dark:border-outline-variant fixed left-0 top-0 h-full z-40 pt-20 w-64">
      <div className="px-md py-lg mb-md">
      <div className="font-display-arcade text-h2-hud text-primary dark:text-primary mb-1">SUPERVISOR_OS</div>
      <div className="font-label-compact text-label-compact text-on-surface-variant">V2.04_STABLE</div>
      </div>
      <ul className="flex flex-col gap-sm">
      <li>
      <a className="flex items-center gap-md text-on-surface-variant px-md py-sm opacity-70 hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-compact text-label-compact">Command</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-md text-on-surface-variant px-md py-sm opacity-70 hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-compact text-label-compact">Leaderboard</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-md text-on-surface-variant px-md py-sm opacity-70 hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-colors" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-compact text-label-compact">Archive</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-md border-l-4 border-secondary text-secondary bg-secondary/10 px-md py-sm translate-x-1 transition-transform" href="#">
      <Settings  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-label-compact text-label-compact">Settings</span>
      </a>
      </li>
      </ul>
      </nav>
      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-lg md:p-xl flex justify-center items-center">
      <div className="w-full max-w-[1000px]">
      <div className="mb-lg flex justify-between items-end border-b border-outline-variant pb-md">
      <div>
      <h1 className="font-h1-hud text-h1-hud text-primary mb-2">SYSTEM_MANUAL</h1>
      <p className="font-data-mono text-data-mono text-on-surface-variant">OPERATIONAL DIRECTIVES // CONTROLS &amp; LOGIC</p>
      </div>
      <button className="bg-transparent border border-outline text-on-surface hover:bg-surface-container-highest font-label-compact text-label-compact px-lg py-sm flex items-center gap-sm transition-colors uppercase" type="button" data-action-id="back-to-menu-3" onClick={actions?.["back-to-menu-3"]}>
      <ArrowLeft className="text-[18px]" aria-hidden={true} focusable="false" />
                          BACK_TO_MENU
                      </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
      {/* Controls Column */}
      <div className="hud-card p-xl mt-4">
      <div className="hud-header font-label-compact text-label-compact text-secondary uppercase tracking-widest">
                              [INPUT_MATRIX]
                          </div>
      <div className="space-y-xl mt-md">
      {/* Navigation */}
      <div className="flex items-start gap-lg border-b border-surface-container-highest pb-md">
      <div className="grid grid-cols-3 gap-xs w-32 shrink-0">
      <div className="col-start-2 border border-outline-variant rounded flex justify-center items-center h-10 bg-surface-container-low">
      <ArrowUp className="text-on-surface" aria-hidden={true} focusable="false" />
      </div>
      <div className="col-start-1 row-start-2 border border-outline-variant rounded flex justify-center items-center h-10 bg-surface-container-low">
      <ArrowLeft className="text-on-surface" aria-hidden={true} focusable="false" />
      </div>
      <div className="col-start-2 row-start-2 border border-outline-variant rounded flex justify-center items-center h-10 bg-surface-container-low">
      <ArrowDown className="text-on-surface" aria-hidden={true} focusable="false" />
      </div>
      <div className="col-start-3 row-start-2 border border-outline-variant rounded flex justify-center items-center h-10 bg-surface-container-low">
      <ArrowRight className="text-on-surface" aria-hidden={true} focusable="false" />
      </div>
      </div>
      <div className="flex flex-col justify-center h-[88px]">
      <h3 className="font-h2-hud text-h2-hud text-primary mb-1">NAVIGATION</h3>
      <p className="font-body-standard text-body-standard text-on-surface-variant">Left/Right arrows translate the active block. Down arrow accelerates descent (Soft Drop). Up arrow rotates block clockwise.</p>
      </div>
      </div>
      {/* Action Keys */}
      <div className="flex items-start gap-lg border-b border-surface-container-highest pb-md">
      <div className="w-32 shrink-0 flex flex-col gap-sm">
      <div className="border border-secondary rounded flex justify-center items-center h-10 bg-secondary/10 w-full neon-border">
      <span className="font-label-compact text-label-compact text-secondary">SPACEBAR</span>
      </div>
      </div>
      <div className="flex flex-col justify-center h-10">
      <h3 className="font-h2-hud text-h2-hud text-primary mb-1">HARD DROP</h3>
      <p className="font-body-standard text-body-standard text-on-surface-variant">Instantly locks the active block in the lowest valid position.</p>
      </div>
      </div>
      <div className="flex items-start gap-lg">
      <div className="w-32 shrink-0 flex flex-col gap-sm">
      <div className="border border-outline-variant rounded flex justify-center items-center h-10 bg-surface-container-low w-full">
      <span className="font-label-compact text-label-compact text-on-surface">C</span>
      </div>
      </div>
      <div className="flex flex-col justify-center h-10">
      <h3 className="font-h2-hud text-h2-hud text-primary mb-1">HOLD MODULE</h3>
      <p className="font-body-standard text-body-standard text-on-surface-variant">Swaps the active block with the current block in the hold buffer. Limited to once per deployment.</p>
      </div>
      </div>
      </div>
      </div>
      {/* Rules Column */}
      <div className="hud-card p-xl mt-4">
      <div className="hud-header font-label-compact text-label-compact text-primary uppercase tracking-widest">
                              [SCORING_LOGIC]
                          </div>
      <div className="space-y-xl mt-md">
      <div className="border border-outline-variant bg-surface-container-low p-md">
      <h3 className="font-h2-hud text-h2-hud text-secondary mb-md border-b border-outline-variant pb-sm">LINE CLEAR PROTOCOLS</h3>
      <ul className="space-y-md font-data-mono text-data-mono text-on-surface-variant">
      <li className="flex justify-between items-center">
      <span>SINGLE_LINE</span>
      <span className="text-primary text-right">100 PTS</span>
      </li>
      <li className="flex justify-between items-center">
      <span>DOUBLE_LINE</span>
      <span className="text-primary text-right">300 PTS</span>
      </li>
      <li className="flex justify-between items-center">
      <span>TRIPLE_LINE</span>
      <span className="text-primary text-right">500 PTS</span>
      </li>
      <li className="flex justify-between items-center border-t border-surface-container-highest pt-md">
      <span className="text-secondary">TETRIS_CLEAR (4)</span>
      <span className="text-secondary font-bold text-right neon-border px-sm py-xs">800 PTS</span>
      </li>
      </ul>
      </div>
      <div>
      <h3 className="font-label-compact text-label-compact text-on-surface-variant uppercase mb-md">MULTIPLIER CONDITIONS</h3>
      <div className="grid gap-md">
      <div className="flex items-start gap-md">
      <Circle className="text-tertiary" aria-hidden={true} focusable="false" />
      <div>
      <div className="font-body-bold text-body-bold text-on-surface">Level Scaling</div>
      <div className="font-body-standard text-body-standard text-on-surface-variant">Base clear points are multiplied by the current operational level (Lvl x PTS).</div>
      </div>
      </div>
      <div className="flex items-start gap-md">
      <Circle className="text-tertiary" aria-hidden={true} focusable="false" />
      <div>
      <div className="font-body-bold text-body-bold text-on-surface">Back-to-Back Bonus</div>
      <div className="font-body-standard text-body-standard text-on-surface-variant">Consecutive Tetris clears yield a 1.5x score multiplier on the subsequent clear.</div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      {/* BottomNavBar (Mobile) */}
      <nav className="md:hidden bg-surface-container-low dark:bg-surface-container-low fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-md pb-sm pt-xs border-t-2 border-outline-variant dark:border-outline-variant rounded-t-xl">
      <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 opacity-60 hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors w-16" href="#">
      <RotateCw className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-compact text-label-compact text-[10px]">Rotate</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 opacity-60 hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors w-16" href="#">
      <Circle className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-compact text-label-compact text-[10px]">Hold</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 opacity-60 hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors w-16" href="#">
      <Circle className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-compact text-label-compact text-[10px]">Drop</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 opacity-60 hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors w-16" href="#">
      <Circle className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-compact text-label-compact text-[10px]">Pause</span>
      </a>
      </nav>
    </>
  );
}
