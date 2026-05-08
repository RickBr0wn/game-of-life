# Game of Life

Conway's Game of Life built with [p5.js](https://p5js.org/). The board is randomly seeded on load and evolves at 10 frames per second. A **Refresh Game Board** button re-seeds with a new random state.

## The rules

Each cell is either alive or dead. At every tick, these four rules are applied simultaneously to every cell:

1. A live cell with fewer than 2 live neighbours dies (underpopulation)
2. A live cell with 2 or 3 live neighbours survives
3. A live cell with more than 3 live neighbours dies (overpopulation)
4. A dead cell with exactly 3 live neighbours becomes alive (reproduction)

The grid wraps at the edges, so cells on opposite sides of the board are considered neighbours.

## Running locally

No build step required — just open `index.html` in a browser.

```bash
open index.html
```

## Built with

- [p5.js](https://p5js.org/) — canvas rendering
- Vanilla JS

## Background

The Game of Life was devised by British mathematician John Horton Conway in 1970. It is a zero-player game — the entire evolution is determined by the initial state alone. The `further.html` page contains additional reading on cellular automata and the patterns that emerge.
