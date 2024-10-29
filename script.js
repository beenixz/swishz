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
let currentMaze;

function getRandomMaze() {
    return mazes[Math.floor(Math.random() * mazes.length)];
}

function drawMaze() {
    mazeElement.innerHTML = '';
    currentMaze = getRandomMaze();

    for (let row = 0; row < currentMaze.length; row++) {
        for (let col = 0; col < currentMaze[row].length; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            if (currentMaze[row][col] === 1) {
                cell.classList.add('wall');
            } else if (currentMaze[row][col] === 2) {
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

    if (
        newX >= 0 && newX < currentMaze[0].length &&
        newY >= 0 && newY < currentMaze.length &&
        currentMaze[newY][newX] !== 1
    ) {
        playerPosition.x = newX;
        playerPosition.y = newY;

        if (currentMaze[newY][newX] === 2) {
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

// 게임 시작 시 초기화
function startGame() {
    playerPosition = { x: 0, y: 0 };
    placeMonster(currentMaze);
    drawMaze();
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

// 게임 시작
startGame();
