const mazeElement = document.getElementById('maze');
const resultElement = document.getElementById('result');
const maze = [
    [0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 1, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 2, 0],
];

let playerPosition = { x: 0, y: 0 };

function drawMaze() {
    mazeElement.innerHTML = '';
    for (let row = 0; row < maze.length; row++) {
        for (let col = 0; col < maze[row].length; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (maze[row][col] === 1) {
                cell.classList.add('wall');
            } else if (maze[row][col] === 2) {
                cell.classList.add('exit');
            }
            if (row === playerPosition.y && col === playerPosition.x) {
                cell.classList.add('player');
            }
            mazeElement.appendChild(cell);
        }
    }
}

function movePlayer(dx, dy) {
    const newX = playerPosition.x + dx;
    const newY = playerPosition.y + dy;

    if (newX >= 0 && newX < maze[0].length && newY >= 0 && newY < maze.length && maze[newY][newX] !== 1) {
        playerPosition.x = newX;
        playerPosition.y = newY;

        if (maze[newY][newX] === 2) {
            resultElement.innerText = '탈출 성공!';
        }

        drawMaze();
    }
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            movePlayer(0, -1);
            break;
        case 'ArrowDown':
            movePlayer(0, 1);
            break;
        case 'ArrowLeft':
            movePlayer(-1, 0);
            break;
        case 'ArrowRight':
            movePlayer(1, 0);
            break;
    }
});

drawMaze();
