# Tic-Tac-Toe

A simple Tic-Tac-Toe game.

## Live

- Domain: https://tictactoe.mertgulsun.com/
- Platform path: http://<droplet-ip>/apps/tictactoe/

## How to Play

- The game is played on a grid that's 3 squares by 3 squares.
- You are X, your friend is O. Players take turns putting their marks in empty squares.
- The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.
- When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.

## Features

- Two-player game.
- Displays the winner or if it's a draw.
- Restart button.

## Design / Style

- Minimal Industrial Mono aesthetic: monochrome base with a single accent (#4DA3FF).
- Flat surfaces with 1 px hairline borders; no shadows or gradients.
- IBM Plex Mono for UI chrome/labels; Inter/system sans fallback for body.
- Clear focus rings: 2 px accent outline with 3 px offset.
- Win state: the three winning cells receive an accent keyline.

## Accessibility

- Status is announced via an `aria-live` region (role="status").
- Visible focus outlines for keyboard users; cells are focusable.
- Target sizes meet 44 px minimum via responsive cell sizing.

## Development

- Files live under `public/` and are static (HTML/CSS/JS only).
- Serve locally: `cd public && python3 -m http.server 8080` then open http://localhost:8080

## Deploy

- Sync static files to the droplet: `deploy_static apps/tictactoe/public tictactoe`
- Nginx vhost: `tictactoe.mertgulsun.com` (SPA fallback via `try_files`)
- HTTPS enabled via Certbot; HTTP redirects to HTTPS
