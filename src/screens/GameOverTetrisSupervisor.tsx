// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Over - Tetris Supervisor
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Home, RefreshCw } from "lucide-react";


export type GameOverTetrisSupervisorActionId = "replay-game-1" | "share-score-2" | "main-menu-3";

export interface GameOverTetrisSupervisorProps {
  actions?: Partial<Record<GameOverTetrisSupervisorActionId, () => void>>;
}

export function GameOverTetrisSupervisor({ actions }: GameOverTetrisSupervisorProps) {
  return (
    <>
      {/* Background Layer: Blurred Game Board */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" data-alt="A heavily blurred, abstract representation of a retro video game grid. The image features a dark slate background with faint, rectilinear shapes suggesting falling blocks. The overall aesthetic is highly textured, muted, and atmospheric, fitting perfectly as a subtle backdrop for a high-contrast dark mode arcade interface." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbf7zG-dZpNHUF4oSSQQuCDALChBFbB44KDwCdzfWPb1JWhczk_NdGbInKrY4Aw2pdfEIR-xIqqxShMdHfhI_0TR7N8wygRxJgJZhr_Jbqob627beDRfQIZaGa-TvZ8Mt3df3cuXF1miBvORzMrwxKkefRrf17c7z9wSx1YZbvJ11z_UV3PeRr3AbmaXjTDdeqYMcstFNGKJkVBhYCEjgLR1z7mfByR0n_8QdFVEASEL0v5o1uPGrX_Y_bMJM1VflkmQOMSlef')", backgroundSize: "cover", backgroundPosition: "center", filter: "blur(8px) grayscale(100%)"}}>
      </div>
      {/* Main Content Canvas */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-md md:p-xl">
      <div className="w-full max-w-2xl">
      {/* Game Over Container */}
      <div className="bg-surface/90 border border-outline-variant p-lg md:p-xl shadow-2xl backdrop-blur-sm relative overflow-hidden group">
      {/* Decorative scanlines */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:100%_4px] opacity-30"></div>
      {/* Header */}
      <div className="text-center mb-xl relative z-10">
      <h1 className="font-display-arcade text-display-arcade text-error glow-error uppercase tracking-widest">GAME OVER</h1>
      <p className="font-label-compact text-label-compact text-on-surface-variant mt-sm uppercase tracking-widest">Sequence Terminated</p>
      </div>
      {/* Stats Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-xl relative z-10">
      {/* Final Score */}
      <div className="bg-surface-container-low border border-outline p-md flex flex-col items-center justify-center relative col-span-1 md:col-span-3">
      <span className="absolute top-0 left-0 bg-background border-b border-r border-outline px-sm py-xs font-label-compact text-label-compact text-on-surface-variant uppercase">Final Score</span>
      <div className="mt-lg font-display-arcade text-h1-hud text-on-surface">142,850</div>
      <div className="font-label-compact text-label-compact text-secondary mt-xs flex items-center gap-xs">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-[16px]" aria-hidden={true} focusable="false" />
                                  NEW HIGH SCORE
                              </div>
      </div>
      {/* Level Reached */}
      <div className="bg-surface-container-low border border-outline-variant p-md flex flex-col items-center justify-center relative">
      <span className="absolute top-0 left-0 bg-background border-b border-r border-outline-variant px-sm py-xs font-label-compact text-label-compact text-on-surface-variant uppercase">Level</span>
      <div className="mt-lg font-data-mono text-data-mono text-primary">12</div>
      </div>
      {/* Lines Cleared */}
      <div className="bg-surface-container-low border border-outline-variant p-md flex flex-col items-center justify-center relative">
      <span className="absolute top-0 left-0 bg-background border-b border-r border-outline-variant px-sm py-xs font-label-compact text-label-compact text-on-surface-variant uppercase">Lines</span>
      <div className="mt-lg font-data-mono text-data-mono text-primary">104</div>
      </div>
      {/* Tetris Rate */}
      <div className="bg-surface-container-low border border-outline-variant p-md flex flex-col items-center justify-center relative">
      <span className="absolute top-0 left-0 bg-background border-b border-r border-outline-variant px-sm py-xs font-label-compact text-label-compact text-on-surface-variant uppercase">Tetris Rate</span>
      <div className="mt-lg font-data-mono text-data-mono text-primary">18%</div>
      </div>
      </div>
      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-md relative z-10 justify-center">
      <button className="bg-transparent border-[2px] border-secondary text-secondary hover:bg-secondary/10 px-lg py-md font-label-compact text-label-compact uppercase tracking-widest flex items-center justify-center gap-sm transition-colors duration-150 active:bg-secondary/30 glow-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-4 focus:ring-offset-background" type="button" data-action-id="replay-game-1" onClick={actions?.["replay-game-1"]}>
      <RefreshCw aria-hidden={true} focusable="false" />
                              Replay Game
                          </button>
      <button className="bg-transparent border border-outline text-on-surface hover:bg-surface-container-high px-lg py-md font-label-compact text-label-compact uppercase tracking-widest flex items-center justify-center gap-sm transition-colors duration-150 active:bg-surface-container-highest focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-4 focus:ring-offset-background" type="button" data-action-id="share-score-2" onClick={actions?.["share-score-2"]}>
      <Circle aria-hidden={true} focusable="false" />
                              Share Score
                          </button>
      <button className="bg-transparent border border-outline text-on-surface hover:bg-surface-container-high px-lg py-md font-label-compact text-label-compact uppercase tracking-widest flex items-center justify-center gap-sm transition-colors duration-150 active:bg-surface-container-highest focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-4 focus:ring-offset-background" type="button" data-action-id="main-menu-3" onClick={actions?.["main-menu-3"]}>
      <Home aria-hidden={true} focusable="false" />
                              Main Menu
                          </button>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
