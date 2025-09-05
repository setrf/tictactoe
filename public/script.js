const cells = document.querySelectorAll('[data-cell]');
const gameStatus = document.querySelector('.game-status');
const restartButton = document.querySelector('.restart-button');

let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const handleCellClick = (e) => {
  const clickedCell = e.target;
  const clickedCellIndex = Array.from(cells).indexOf(clickedCell);

  if (gameState[clickedCellIndex] !== '' || !gameActive) {
    return;
  }

  handleCellPlayed(clickedCell, clickedCellIndex);
  handleResultValidation();
};

const handleCellPlayed = (clickedCell, clickedCellIndex) => {
  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.classList.add(currentPlayer.toLowerCase());
  clickedCell.classList.add('filled');
};

const handleResultValidation = () => {
  let winLine = null;
  for (let i = 0; i < winningConditions.length; i++) {
    const line = winningConditions[i];
    const a = gameState[line[0]];
    const b = gameState[line[1]];
    const c = gameState[line[2]];
    if (!a || !b || !c) continue;
    if (a === b && b === c) { winLine = line; break; }
  }

  if (winLine) {
    gameStatus.textContent = `Player ${currentPlayer} has won!`;
    gameStatus.classList.remove('status--turn','status--draw');
    gameStatus.classList.add('status--win');
    winLine.forEach(i => cells[i].classList.add('win'));
    gameActive = false;
    return;
  }

  const roundDraw = !gameState.includes('');
  if (roundDraw) {
    gameStatus.textContent = 'Game ended in a draw!';
    gameStatus.classList.remove('status--turn','status--win');
    gameStatus.classList.add('status--draw');
    gameActive = false;
    return;
  }

  handlePlayerChange();
};

const handlePlayerChange = () => {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  gameStatus.textContent = `It's ${currentPlayer}'s turn`;
  gameStatus.classList.remove('status--win','status--draw');
  gameStatus.classList.add('status--turn');
};

const handleRestartGame = () => {
  currentPlayer = 'X';
  gameActive = true;
  gameState = ['', '', '', '', '', '', '', '', ''];
  gameStatus.textContent = `It's ${currentPlayer}'s turn`;
  gameStatus.classList.remove('status--win','status--draw');
  gameStatus.classList.add('status--turn');
  cells.forEach(cell => {
    cell.classList.remove('x','o','filled','win');
  });
};

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', handleRestartGame);

gameStatus.textContent = `It's ${currentPlayer}'s turn`;
gameStatus.classList.add('status--turn');
