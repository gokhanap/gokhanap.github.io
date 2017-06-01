"use strict";
// HEART CLASS
// Heart item player can collect
var Heart = function() {
    this.sprite = 'images/Heart.png';
    this.lifeSprite = 'images/life.png';
    this.x;
    this.y;
};

// Adds life to players life if less than 4.
Heart.prototype.addLife = function() {
    if  (player.life < 4) {
        player.life++;
    }
};

// Set item location method.
Heart.prototype.setLocation = function(row, col) {
    this.x = (col - 1) * 101;
    this.y = (row - 1) * 83;
};

// Draws collectible heart items on the screen.
Heart.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

// Draws lifeSprite instances on top right section of canvas,
// due to the number of the players life count.
    for (var i = 1; i <= player.life; i++) {
        ctx.drawImage(Resources.get(this.lifeSprite), 501 - (i * 23), 0);
    }
};

// Checks item if collected
Heart.prototype.checkCollected = function() {

// Calculates item boundaries for collecting
    var itemArea = {
        x: this.x + 5,
        y: this.y + 80,
        width: 83 - 5 - 5,
        height: 171 - 40 - 80
    };

// Calculates player boundaries for collecting
    var playerArea = {
        x: player.x + 20,
        y: player.y + 70,
        width: 83 - 20 - 20,
        height: 171 - 35 - 70
    };

// 2d collection detection
    if (itemArea.x < playerArea.x + playerArea.width &&
        itemArea.x + itemArea.width > playerArea.x &&
        itemArea.y < playerArea.y + playerArea.height &&
        itemArea.height + itemArea.y > playerArea.y) {
        console.log("Item collected!");
        this.addLife();
        this.x = -100;
        this.y = -100;
    }
};

// GEM CLASS
// Gem item player can collect
var Gem = function() {
    this.x;
    this.y;
};

// Add point to players score.
Gem.prototype.addPoint = function() {
    player.score = player.score + 5;
};

// Set item location method.
Gem.prototype.setLocation = function(row, col) {
    this.x = (col - 1) * 101;
    this.y = (row - 1) * 83 - 24;
};

// Draws the collectible gem items on the screen.
Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Checks item if collected
Gem.prototype.checkCollected = function() {

// Calculates item boundaries for collecting
    var itemArea = {
        x: this.x + 5,
        y: this.y + 80,
        width: canvas.cellWidth - 5 - 5,
        height: 171 - 30 - 80
    };

// Calculates player boundaries for collecting
    var playerArea = {
        x: player.x + 20,
        y: player.y + 70,
        width: 83 - 20 - 20,
        height: 171 - 35 - 70
    };

// 2d collection detection
    if (itemArea.x < playerArea.x + playerArea.width &&
        itemArea.x + itemArea.width > playerArea.x &&
        itemArea.y < playerArea.y + playerArea.height &&
        itemArea.height + itemArea.y > playerArea.y) {
        console.log("Item collected!");
        this.addPoint();
        this.x = -100;
        this.y = -100;
    }
};


// ENEMY CLASS
// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x;
    this.y;
    this.speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if (this.x < 505) {
        this.x = this.x + this.speed;
        this.x * dt;
    } else {
        this.x = -100;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Check collision
Enemy.prototype.checkCollisions = function() {

// Calculates enemy boundaries for collision
    var enemyArea = {
        x: this.x + 5,
        y: this.y + 80,
        width: 83 - 5 - 5,
        height: 171 - 30 - 80
    };

// Calculates player boundaries for collision
    var playerArea = {
        x: player.x + 20,
        y: player.y + 70,
        width: 83 - 20 - 20,
        height: 171 - 35 - 70
    };

// 2d collision detection
    if (enemyArea.x < playerArea.x + playerArea.width &&
        enemyArea.x + enemyArea.width > playerArea.x &&
        enemyArea.y < playerArea.y + playerArea.height &&
        enemyArea.height + enemyArea.y > playerArea.y) {
        console.log("collision detected!");
        player.life--;
        player.x = 202;
        player.y = 395;
    }
};



// PLAYER CLASS
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x;
    this.y;
    this.score = 0;
};

// Resets game if player runs out of life.
Player.prototype.update = function(dt) {
    if (this.life < 1) {
        level.reset();
    }
};

// Set player location method.
Player.prototype.setLocation = function(row, col) {
    this.x = (col - 1) * 101;
    this.y = (row - 1) * 83 - 20;
};

// Writes players score on top section of canvas,
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    ctx.fillStyle = "white";
    ctx.font = "24px sans-serif";
    ctx.fillText(this.score, 382, 33);
};

// Player move methods
Player.prototype.moveUp = function() {
    this.y = this.y - canvas.cellHeight;
};

Player.prototype.moveDown = function() {
    this.y = this.y + canvas.cellHeight;
};

Player.prototype.moveLeft = function() {
    this.x = this.x - canvas.cellWidth;
};

Player.prototype.moveRight = function() {
    this.x = this.x + canvas.cellWidth;
};


// This function takes key pressed as parameter
// and updates x and y values according to relevant direction.

Player.prototype.handleInput = function(key) {
    if (key === "up" && this.y > 0) {
        this.moveUp();
    } else if (key === "left" && this.x > 0) {
        this.moveLeft();
    } else if (key === "right" && this.x < 404) {
        this.moveRight();
    } else if (key === "down" && this.y < 395) {
        this.moveDown();
    }
    console.log(key, this.x, this.y);
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// ENEMIES
// All enemy objects will be stored in allEnemies array.
var allEnemies = [];

// enemy1 properties
allEnemies.push(new Enemy()); // Creates new Enemy in allEnemies array.
allEnemies[0].y = 60; // starting y position of enemy1
allEnemies[0].x = -60; // starting x position of enemy1

// enemy2 properties
allEnemies.push(new Enemy()); // Creates new Enemy in allEnemies array.
allEnemies[1].y = 143; // starting y position of enemy2
allEnemies[1].x = -143; // starting x position of enemy2

// enemy3 properties
allEnemies.push(new Enemy()); // Creates new Enemy in allEnemies array.
allEnemies[2].y = 226; // starting y position of enemy3
allEnemies[2].x = -226; // starting x position of enemy3


// PLAYER
// Creates instance of Player into player variable.
var player = new Player();
player.setLocation(6, 3);

// ITEMS
// All item objects will be stored in allItems array.
var allItems = [];

// Heart item properties
allItems.push(new Heart()); // Creates new Item in allItems array.
allItems[0].setLocation(5, 2);

// Orange gem item properties
allItems.push(new Gem()); // Creates new Item in allItems array.
allItems[1].sprite = 'images/Gem Orange.png';

// Blue gem item properties
allItems.push(new Gem()); // Creates new Item in allItems array.
allItems[2].sprite = 'images/Gem Blue.png';

// Green gem item properties
allItems.push(new Gem()); // Creates new Item in allItems array.
allItems[3].sprite = 'images/Gem Green.png';


// LEVEL
// Game level which stores the levels of game.
var Level = function() {
};

var level = new Level();

// Displays game level at header.
Level.prototype.render = function() {
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.font = "24px sans-serif";
    ctx.fillText(this.count, 278, 33);
};

// Random number generation method.
// Will be used for random locating item.
Level.prototype.randomCol = function() {
  var min = Math.ceil(1);
  var max = Math.floor(5);
  return Math.floor(Math.random() * (max - min)) + min;
};

Level.prototype.randomRow = function() {
  var min = Math.ceil(1);
  var max = Math.floor(6);
  return Math.floor(Math.random() * (max - min)) + min;
};

// Level reset method
Level.prototype.reset = function() {
    level.level1();
    player.setLocation(6, 3);
};

// Changes game level if player wins current level
Level.prototype.update = function() {
    if (player.y < 63) {
        this.levelUp();
    }
};

// Level1 customizations
Level.prototype.level1 = function() {
    player.life = 3;
    level.count = 1;
    player.score = 0;
    allItems[0].setLocation(this.randomRow(), this.randomCol());// Heart item
    allItems[1].setLocation(this.randomRow(), this.randomCol());// Orange gem item
    allItems[2].setLocation(this.randomRow(), this.randomCol());// Blue gem item
    allItems[3].setLocation(this.randomRow(), this.randomCol());// Green gem item
    allEnemies[0].speed = 2; // speed of enemy1
    allEnemies[1].speed = 3; // speed of enemy2
    allEnemies[2].speed = 1; // speed of enemy3
};

// Apply level1 properties
level.level1();


// LevelUp customizations
Level.prototype.levelUp = function() {
    player.setLocation(6, 3);
    this.count++;
    player.score = player.score + 10;
    allItems[0].setLocation(this.randomRow(), this.randomCol());// Heart item
    allItems[1].setLocation(this.randomRow(), this.randomCol());// Orange gem item
    allItems[2].setLocation(this.randomRow(), this.randomCol());// Blue gem item
    allItems[3].setLocation(this.randomRow(), this.randomCol());// Green gem item
    allEnemies[0].speed++; // speed of enemy1
    allEnemies[1].speed++; // speed of enemy2
    allEnemies[2].speed++; // speed of enemy3
};


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});