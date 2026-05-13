// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Options - Tetris Supervisor
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Settings } from "lucide-react";


export type GameOptionsTetrisSupervisorActionId = "save-and-exit-1";

export interface GameOptionsTetrisSupervisorProps {
  actions?: Partial<Record<GameOptionsTetrisSupervisorActionId, () => void>>;
}

export function GameOptionsTetrisSupervisor({ actions }: GameOptionsTetrisSupervisorProps) {
  return (
    <>
      {/* TopAppBar (Suppressed for focused intent, but kept side nav if needed. The prompt says it's a settings menu. "Settings" is in the SideNavBar. We'll show SideNavBar and suppress TopAppBar to focus on settings content, per instructions: "If designing a user settings page, Profile is active." Wait, settings is in side nav.) */}
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col bg-surface-container dark:bg-surface-container docked left-0 h-full w-64 border-r border-outline-variant dark:border-outline-variant fixed left-0 top-0 h-full z-40 pt-20">
      <div className="px-md mb-xl">
      <h1 className="font-display-arcade text-h2-hud text-primary dark:text-primary">SUPERVISOR_OS</h1>
      <p className="font-label-compact text-label-compact text-on-surface-variant opacity-70 mt-sm">V2.04_STABLE</p>
      </div>
      <div className="flex flex-col gap-xs mt-lg">
      <a className="flex items-center gap-md text-on-surface-variant px-md py-sm opacity-70 hover:bg-surface-container-highest dark:hover:bg-surface-container-highest" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-compact text-label-compact">Command</span>
      </a>
      <a className="flex items-center gap-md text-on-surface-variant px-md py-sm opacity-70 hover:bg-surface-container-highest dark:hover:bg-surface-container-highest" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-compact text-label-compact">Leaderboard</span>
      </a>
      <a className="flex items-center gap-md text-on-surface-variant px-md py-sm opacity-70 hover:bg-surface-container-highest dark:hover:bg-surface-container-highest" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-compact text-label-compact">Archive</span>
      </a>
      <a className="flex items-center gap-md border-l-4 border-secondary text-secondary bg-secondary/10 px-md py-sm hover:bg-surface-container-highest dark:hover:bg-surface-container-highest" href="#">
      <Settings aria-hidden={true} focusable="false" />
      <span className="font-label-compact text-label-compact">Settings</span>
      </a>
      </div>
      </nav>
      {/* Main Canvas */}
      <main className="flex-grow p-lg md:p-xl flex justify-center items-start">
      <div className="w-full max-w-container-max flex flex-col gap-lg">
      <header className="mb-md">
      <h2 className="font-h1-hud text-h1-hud text-on-surface uppercase tracking-widest glow-text-secondary border-b border-outline-variant pb-sm inline-block">Game Options</h2>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
      {/* Sound Options */}
      <div className="bg-surface border border-outline-variant p-md relative flex flex-col gap-md">
      <span className="absolute -top-3 left-md bg-background px-sm font-label-compact text-label-compact text-on-surface-variant uppercase tracking-wider">Audio Systems</span>
      <div className="flex justify-between items-center bg-surface-container p-sm border border-outline-variant">
      <span className="font-data-mono text-data-mono text-on-surface">SFX Volume</span>
      <label className="relative inline-flex items-center cursor-pointer">
      <input checked={true} className="sr-only switch-peer" type="checkbox" />
      <div className="switch-bg w-11 h-6 bg-surface-container-highest rounded-full border border-outline-variant transition-colors"></div>
      <div className="switch-dot absolute left-[2px] top-[2px] w-5 h-5 bg-on-surface rounded-full transition-transform"></div>
      </label>
      </div>
      <div className="flex justify-between items-center bg-surface-container p-sm border border-outline-variant">
      <span className="font-data-mono text-data-mono text-on-surface">Music Track</span>
      <label className="relative inline-flex items-center cursor-pointer">
      <input checked={true} className="sr-only switch-peer" type="checkbox" />
      <div className="switch-bg w-11 h-6 bg-surface-container-highest rounded-full border border-outline-variant transition-colors"></div>
      <div className="switch-dot absolute left-[2px] top-[2px] w-5 h-5 bg-on-surface rounded-full transition-transform"></div>
      </label>
      </div>
      </div>
      {/* Gameplay Options */}
      <div className="bg-surface border border-outline-variant p-md relative flex flex-col gap-md">
      <span className="absolute -top-3 left-md bg-background px-sm font-label-compact text-label-compact text-on-surface-variant uppercase tracking-wider">Gameplay Parameters</span>
      <div className="flex flex-col gap-sm bg-surface-container p-sm border border-outline-variant">
      <div className="flex justify-between items-center">
      <span className="font-data-mono text-data-mono text-on-surface">Starting Level</span>
      <span className="font-data-mono text-data-mono text-secondary">05</span>
      </div>
      <input className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-secondary" max="15" min="1" type="range" value="5" />
      </div>
      <div className="flex justify-between items-center bg-surface-container p-sm border border-outline-variant">
      <span className="font-data-mono text-data-mono text-on-surface">Ghost Piece Projection</span>
      <label className="relative inline-flex items-center cursor-pointer">
      <input checked={true} className="sr-only switch-peer" type="checkbox" />
      <div className="switch-bg w-11 h-6 bg-surface-container-highest rounded-full border border-outline-variant transition-colors"></div>
      <div className="switch-dot absolute left-[2px] top-[2px] w-5 h-5 bg-on-surface rounded-full transition-transform"></div>
      </label>
      </div>
      <div className="flex flex-col gap-sm bg-surface-container p-sm border border-outline-variant">
      <div className="flex justify-between items-center">
      <span className="font-data-mono text-data-mono text-on-surface">Control Sensitivity (ms)</span>
      <span className="font-data-mono text-data-mono text-secondary">150</span>
      </div>
      <input className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-secondary" max="300" min="50" type="range" value="150" />
      </div>
      </div>
      </div>
      <div className="flex justify-end mt-lg">
      <button className="bg-transparent border-2 border-secondary text-secondary font-label-compact text-label-compact px-xl py-sm uppercase tracking-widest hover:bg-secondary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background active:bg-on-surface active:text-background" type="button" data-action-id="save-and-exit-1" onClick={actions?.["save-and-exit-1"]}>
                          Save &amp; Exit
                      </button>
      </div>
      </div>
      </main>
      {/* BottomNavBar (Mobile Only - Suppressed for Settings context if preferred, but rendering as per standard logic if required on mobile. Settings is not a top level destination in the bottom nav JSON (Rotate, Hold, Drop, Pause). So suppress BottomNavBar because we are in settings.) */}
    </>
  );
}
