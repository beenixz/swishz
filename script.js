const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const backgroundMusic = document.getElementById("backgroundMusic");
const scoreSound = document.getElementById("scoreSound");
const gameOverSound = document.getElementById("gameOverSound");
canvas.width = 400;
canvas.height = 600;

// 이미지 로드
const playerImageFront = new Image();
playerImageFront.src = 'player_front.jpg'; // 앞모습 이미지 경로

const playerImageLeft = new Image();
playerImageLeft.src = 'player_left.jpg'; // 왼쪽 이미지 경로

const playerImageRight = new Image();
playerImageRight.src = 'player_right.jpg'; // 오른쪽 이미지 경로

const obstacleImage = new Image();
obstacleImage.src = 'fire1_0056.png'; // 장애물 이미지 경로

// 배경을 흰색으로 설정
// const backgroundImage = new Image();
// backgroundImage.src = 'Bloodbackground.png'; // 배경 이미지 경로

let playerX = canvas.width / 2 - 25;
let playerY = canvas.height - 50;
let playerWidth = 50;
let playerHeight = 50;
let obstacles = [];
let score = 0;
let gameOver = false;
let level = 1;
let obstacleSpeed = 8; // 장애물 속도 증가
let obstacleFrequency = 0.05; // 장애물 생성 확률 증가
let levelUpScore = 20; // 레벨 업 점수 기준
let moveDirection = 0; // 1: 오른쪽, -1: 왼쪽, 0: 정지
let currentDifficulty = 'easy'; // 현재 난이도 저장
let playerSpeed = 10; // 플레이어 이동 속도 증가

// 난이도 설정
function setDifficulty(difficulty) {
    currentDifficulty = difficulty; // 현재 난이도 저장
    switch (difficulty) {
        case 'easy':
            obstacleSpeed = 8; // 기본 속도 증가
            break;
        case 'normal':
            obstacleSpeed = 10; // 노말 속도
            break;
        case 'hard':
            obstacleSpeed = 12; // 하드 속도
            break;
        case 'extreme':
            obstacleSpeed = 15; // 익스트림 속도
            break;
    }
    startGame(); // 게임 시작
}

// 게임 시작
function startGame() {
    document.getElementById("difficultySelection").style.display = "none"; // 난이도 선택 창 숨김
    canvas.style.display = "block"; // 캔버스 보이기
    update(); // 게임 업데이트 시작
}

// 장애물 클래스
class Obstacle {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.width = type === 'large' ? 50 : 30;
        this.height = type === 'large' ? 50 : 30;
        this.type = type;
    }

    draw() {
        ctx.drawImage(obstacleImage, this.x, this.y, this.width, this.height);
    }

    update() {
        this.y += obstacleSpeed; // 장애물 내려오기
    }
}

// 장애물 생성
function generateObstacle() {
    const x = Math.random() * (canvas.width - 50);
    const type = Math.random() < 0.5 ? 'large' : 'small';
    obstacles.push(new Obstacle(x, 0, type));
}

// 플레이어 그리기
function drawPlayer() {
    if (moveDirection === 1) {
        ctx.drawImage(playerImageRight, playerX, playerY, playerWidth, playerHeight); // 오른쪽 이미지
    } else if (moveDirection === -1) {
        ctx.drawImage(playerImageLeft, playerX, playerY, playerWidth, playerHeight); // 왼쪽 이미지
    } else {
        ctx.drawImage(playerImageFront, playerX, playerY, playerWidth, playerHeight); // 가만히 있을 때 앞모습
    }
}

// 점수 그리기
function drawScore() {
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("점수: " + score, 10, 30);
}

// 레벨 그리기
function drawLevel() {
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("레벨: " + level, 250, 30);
}

// 게임 오버 화면 표시
function showGameOver() {
    document.getElementById("finalScore").innerText = "점수: " + score;
    document.getElementById("gameOverScreen").style.display = "block";
    gameOverSound.play(); // 게임 오버 소리 재생
}

// 재시작 버튼 이벤트 리스너
document.getElementById("restartButton").addEventListener("click", function() {
    score = 0;
    level = 1;
    obstacles = [];
    playerX = canvas.width / 2 - 25;
    playerY = canvas.height - 50;
    gameOver = false;
    setDifficulty(currentDifficulty); // 현재 난이도로 초기화
    document.getElementById("gameOverScreen").style.display = "none";
    backgroundMusic.play(); // 배경 음악 재생
    update(); // 게임 업데이트 시작
});

// 레벨 업 시스템
function checkLevelUp() {
    if (score >= level * levelUpScore) {
        level += 1; // 레벨 증가
        obstacleSpeed += 0.5; // 장애물 속도 증가
        obstacleFrequency += 0.005; // 장애물 생성 확률 증가
    }

    // DEATH 난이도로 변경
    if (currentDifficulty === 'extreme' && score > 100) {
        alert("DEATH 난이도로 변경되었습니다!");
        obstacleSpeed *= 1.8; // 속도 1.8배 증가
        currentDifficulty = 'death'; // 난이도 변경
    }
}

// 게임 업데이트
function update() {
    if (gameOver) {
        showGameOver();
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white"; // 배경을 흰색으로 설정
    ctx.fillRect(0, 0, canvas.width, canvas.height); // 흰색 배경 그리기

    if (Math.random() < obstacleFrequency) {
        generateObstacle();
    }

    obstacles.forEach((obstacle, index) => {
        obstacle.update();
        obstacle.draw();

        // 충돌 감지
        if (playerX < obstacle.x + obstacle.width &&
            playerX + playerWidth > obstacle.x &&
            playerY < obstacle.y + obstacle.height &&
            playerY + playerHeight > obstacle.y) {
            gameOver = true; // 충돌 시 게임 오버
        }

        // 화면 밖으로 나간 장애물 제거
        if (obstacle.y > canvas.height) {
            obstacles.splice(index, 1);
            score += 1; // 장애물을 피할 때마다 점수 증가
            scoreSound.play(); // 점수 획득 소리 재생
        }
    });

    // 플레이어 이동
    if (moveDirection === 1 && playerX < canvas.width - playerWidth) {
        playerX += playerSpeed; // 오른쪽으로 이동
    } else if (moveDirection === -1 && playerX > 0) {
        playerX -= playerSpeed; // 왼쪽으로 이동
    }

    // 레벨 업 체크
    checkLevelUp();

    drawPlayer();
    drawScore();
    drawLevel();

    requestAnimationFrame(update); // 다음 프레임 업데이트
}

// 키보드 이벤트 리스너
document.addEventListener("keydown", (event) => {
    if (event.code === "KeyA") {
        moveDirection = -1; // 왼쪽 이동
    } else if (event.code === "KeyD") {
        moveDirection = 1; // 오른쪽 이동
    }
});

// 이동 방향 초기화
document.addEventListener("keyup", (event) => {
    if (event.code === "KeyA" || event.code === "KeyD") {
        moveDirection = 0; // 이동 정지
    }
});

// 게임 초기화
backgroundMusic.play(); // 게임 시작 시 배경 음악 재생

// 난이도 버튼 클릭 이벤트 추가
document.getElementById("easyButton").addEventListener("click", () => setDifficulty('easy'));
document.getElementById("normalButton").addEventListener("click", () => setDifficulty('normal'));
document.getElementById("hardButton").addEventListener("click", () => setDifficulty('hard'));
document.getElementById("extremeButton").addEventListener("click", () => setDifficulty('extreme'));
