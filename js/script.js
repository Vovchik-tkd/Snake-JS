let snake = [0, 1, 2],
    score = 0,
    appleId = 0;

 snakeBody = () => {
     snake.forEach(element => {
         document.getElementById('' + element).style.backgroundColor = 'green';
     });
     document.getElementById('' + snake[snake.length - 1]).style.backgroundColor = '#6E420D';
 };

 snakeBody();

 function moveUp() {
    appleCheck();
    if (snake[snake.length - 1] < 10) {
        snake.push(snake[snake.length - 1] + 90);
    } else {
        snake.push(snake[snake.length - 1] - 10);
    }
    snakeBody();
    gameOver();
 };

 function moveDown() {
    appleCheck();
    if (snake[snake.length - 1] >= 90) {
        snake.push(snake[snake.length - 1] - 90);
    } else {
        snake.push(snake[snake.length - 1] + 10);
    }
    snakeBody();
    gameOver();
 };

 function moveLeft() {
    appleCheck();
    if (snake[snake.length - 1] % 10 < 1) {
        snake.push(snake[snake.length - 1] + 9);
    } else {
        snake.push(snake[snake.length - 1] - 1);
    }
    snakeBody();
    gameOver();
 };

 function moveRight() {
    appleCheck();
    if (snake[snake.length - 1] % 10 > 8) {
        snake.push(snake[snake.length - 1] - 9);
    } else {
        snake.push(snake[snake.length - 1] + 1);
    }
    snakeBody();
    gameOver();
 };

 function clearBoard() {
    for (let j = 0; j < 100; j++) {
        document.getElementById('' + j).style.backgroundColor = 'black';
    }
 }

 function gameOver() {
    for (let i = 0; i < snake.length - 1; i++) {
        if (snake[snake.length - 1] == snake[i]) {
            alert(`Игра окончена, ваш рекорд: ${score}`);
            snake = [0, 1, 2];
            score = 0;
            clearBoard();
            appleRandomPlace();
        } 
        if(snake.length == 100) {
            alert(`Вы победили!`);
            snake = [0, 1, 2];
            score = 0;
            clearBoard();
        }
    }
    snakeBody();
    document.querySelector('.score').textContent = score;
    return(snake, score);
 };

 function appleRandomPlace() {
    appleId = Math.floor(Math.random() * 100);
    snake.forEach(item => {
        if (item == appleId) {
            appleRandomPlace();
        }
    })
    document.getElementById('' + appleId).style.backgroundColor = 'red';
         
 };

 function appleCheck() {
    if (snake[snake.length - 1] == appleId) {
        document.getElementById('' + appleId).style.backgroundColor = 'black';
        appleRandomPlace();
        score++;
        document.querySelector('.score').textContent = score;
    } else {
        document.getElementById('' + snake.shift()).style.backgroundColor = 'black';
    }
 }

 appleRandomPlace();

 window.addEventListener('keydown', (e) => {
    if (e.keyCode == 38) {
        moveUp();
    }
    if (e.keyCode == 40) {
        moveDown();
    }
    if (e.keyCode == 37) {
        moveLeft();
    }
    if (e.keyCode == 39) {
        moveRight();
    }
 });
