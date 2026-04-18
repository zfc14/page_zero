// ── REGISTRO DE CENÁRIOS ──────────────────────────────────────────────────
// Adicionar um novo cenário: criar um objeto aqui + beats em story.js.
// Nenhum outro arquivo precisa ser modificado.
const SCENARIOS = {
  kanon_beach: {
    id: 'kanon_beach',
    title: 'Kanon \u2014 Ocean Park',
    mapMarker: { x: 0.75, y: 0.50 },
    entryBeat: 's01',
    minigame: {
      type: 'boat_navigation',
      triggerBeat: 'MINIGAME_SAIL',
      onCompleteBeat: 'minigame_done'
    },
    character: 'kanon',
    defaultBg: '../art/Background.png'
  }
};
