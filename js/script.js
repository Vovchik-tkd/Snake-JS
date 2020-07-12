let snake = [0, 1, 2],
    score = 0,
    appleId = 0;

 snakeBody = () => {
     snake.forEach(element => {
         document.getElementById('' + element).style.backgroundColor = 'green';
     });
 };

 snakeMove = (id) => {
    snake.push(id);
 };

 gameOver = () => {
    for (let i = 0; i < snake.length - 1; i++) {
        if (snake[snake.length - 1] == snake[i]) {
            alert('Игра окончена, ваш рекорд: ' + score);
            snake = [0, 1, 2];
            score = 0;
            for (let j = 0; j < 100; j++) {
                document.getElementById('' + j).style.backgroundColor = 'black';
            }
            appleRandomPlace();
        } 
        if(snake.length == 100) {
            alert('Вы победили!');
        }
    }
    return(snake, score);
 };

 appleRandomPlace = () => {
     appleId = Math.ceil(Math.random() * 100); 
     for (let i = 0; i < snake.length; i++) {
        if (appleId == snake[i]) {
            appleRandomPlace();
        }
    }
     document.getElementById('' + appleId).style.backgroundColor = 'red';
     return(appleId);
 }

 moveUp = () => {
    if(id < 10) {
        id += 90 ;
    } else {
        id -= 10;
    }
 }
 moveDown = () => {
    if(id >= 90) {
        id -= 90;
    } else {
        id += 10;
    }
 }
 moveLeft = () => {
    if (id % 10 <= 0) {
        id += 9;
    } else {
        id--;
    }
 }
 moveRight = () => {
    if (id % 10 >= 9) {
        id -= 9;
    } else {
        id++;
    }
 }
 appleCheck = () => {
    if (snake[snake.length - 1] == appleId) {
        document.getElementById('' + appleId).style.backgroundColor = 'black';
        appleRandomPlace();
        score++;
        document.querySelector('.score').textContent = score;
    } else {
        document.getElementById('' + snake.shift()).style.backgroundColor = 'black';
    }
 }

document.querySelectorAll('.button').forEach(btn => {
    btn.addEventListener('click', function() {
        appleCheck();
        id = snake[snake.length - 1];
        if(this.value == 'up') {
            moveUp();
        } else if (this.value == 'down') {
            moveDown();
        }else if (this.value == 'left') {
            moveLeft();
        }else if (this.value == 'right') {
            moveRight();
        }
        snakeMove(id);
        gameOver();
        snakeBody();
    })
})

snakeBody();
appleRandomPlace();
