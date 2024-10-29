const mazeElement = document.getElementById('maze');
const resultElement = document.getElementById('result');

const mazes = [
    [
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
    ],
    [
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 1, 1, 1],
        [0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    ],
    [
        [0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
        [0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 1, 1, 1],
        [0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 2, 0],
    ],
    [
        [0, 1, 1, 1, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 1, 0, 1, 1, 0],
        [1, 1, 0, 1, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]
[
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 0, 0, 0, 0, 2, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]
[
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 2, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]
[
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]
[
        [0, 1, 1, 1, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 1, 0, 1, 1, 0],
        [1, 1, 0, 1, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

];

let playerPosition = { x: 0, y: 0 };
let monsterPosition = { x: 0, y: 0 };

function getRandomMaze() {
    return mazes[Math.floor(Math.random() * mazes.length)];
}

function drawMaze() {
    mazeElement.innerHTML = '';
    const maze = getRandomMaze();

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

            if (row === monsterPosition.y && col === monsterPosition.x) {
                cell.classList.add('monster');
            }

            mazeElement.appendChild(cell);
        }
    }
}

function movePlayer(dx, dy) {
    const newX = playerPosition.x + dx;
    const newY = playerPosition.y + dy;

    const maze = getRandomMaze();

    if (
        newX >= 0 && newX < maze[0].length &&
        newY >= 0 && newY < maze.length &&
        maze[newY][newX] !== 1
    ) {
        playerPosition.x = newX;
        playerPosition.y = newY;

        if (maze[newY][newX] === 2) {
            resultElement.innerText = '탈출 성공!';
        }

        // 몬스터와 충돌 체크
        if (newX === monsterPosition.x && newY === monsterPosition.y) {
            resultElement.innerText = '몬스터에게 잡혔습니다! 게임 오버!';
        }

        drawMaze();
    }
}

function placeMonster(maze) {
    do {
        monsterPosition.x = Math.floor(Math.random() * maze[0].length);
        monsterPosition.y = Math.floor(Math.random() * maze.length);
    } while (maze[monsterPosition.y][monsterPosition.x] === 1 || (monsterPosition.x === playerPosition.x && monsterPosition.y === playerPosition.y));
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
