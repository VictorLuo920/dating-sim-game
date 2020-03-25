// Define constants (I commented this out as of 3/24 3PM)
// const gameState = {};

// const backgroundImages = {
//     1: "url",
//     2: "second",
//     3: "third",
// };
// const winningScore = 1

// const choices = [
//     {score: -1, dialogue: "Why are you still here?", scene: 1},
//     {score: 0, dialogue: "Oh yeah...that was cool", scene: 1},
//     {score: 1, dialogue: "I enjoyed it too!", scene: 1},
//     {score: -1, dialogue: "Ew, emotions.", scene: 2}, 
// 	{score: 0, dialogue: "Oh… haha, thanks…", scene: 2},
// 	{score: 1, dialogue: "You’re pretty cool too!", scene: 2},
// 	{score: -1, dialogue: "…", scene: 3},
// 	{score: 0, dialogue: "Get home safe!", scene: 3},
// 	{score: 1, dialogue: "Wait, here’s my number!", scene: 3}
// ]
// Define cached variables to track
// *stuff I did 3/23, trying jquery, and adding event listeners. shifting paradigms and using phaser and using three scenes to start with..
let currentScore = 0;

// // cached Elements references
// // let $choiceSelect = $('.choices')

// // event listeners
// // $choiceSelect.on('click', handleClick)

// // functions
 
// function nextTurn() {
// functions.1.note: this will go into the handleClick function
// }; 

// function handleClick(event) {
    
// };

// const config = {
//     width: 400,
//     height: 600,
//     backgroundColor: 0xdda0dd,
//     scene: {
//         preload,
//         create,
//         update
//     }
// }
// const game = new Phaser.Game(config)


// Our scenes
let titleScene = new Phaser.Scene("titleScene");
let firstScene = new Phaser.Scene("firstScene");
let secondScene = new Phaser.Scene("secondScene");
let thirdScene = new Phaser.Scene("thirdScene");
let endScene = new Phaser.Scene("endScene");

//codes below are grouped by scenes, preload, and create functions. preloads preload images, which are rendered in the create through the "canvas" element on html... not sure why 

titleScene.preload = function() {
        this.load.image('character', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/sky.jpg')
    };
titleScene.create = function() {
        this.add.sprite(100, 100, 'character');
        let startGame = this.add.text(500, 500, "Start Game?");
        startGame.setInteractive();
        startGame.on('pointerdown', () => this.scene.switch("firstScene"));
    };

firstScene.preload = function() {
        this.load.image('character', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/sky.jpg')
    };
    // hey dumbass you forgot to add setinteractive and coordinates for the text to appear....p
firstScene.create = function() {
        this.add.sprite(100, 100, 'character');
        this.add.text("Hey, that was a pretty intense night, huh?");
        let choice1 = this.add.text(500, 500, "Why are you still here?");
        console.log(choice1);
        choice1.setInteractive();
        choice1.on('pointerdown', () => {
            currentScore = currentScore - 1;
            this.scene.switch('secondScene');
        });
        let choice2 = this.add.text("What was your name again?");
        choice2.on('pointerdown', function() {
            this.scene.switch('secondScene');
        });
        let choice3 = this.add.text("I enjoyed it too!");
        choice3.on('pointerdown', function(){
            currentScore = currentScore + 1;
            this.scene.switch('secondScene');
        })
    };

secondScene.preload = function() {
        this.load.image('character', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/sky.jpg')
    };
secondScene.create = function() {
        this.add.sprite(100, 100, 'character');
        this.prompt = this.add.text("Hey, I know I just met you, but you're pretty cool...");
        this.choice1 = this.add.text("Ew, emotions.");
        choice1.on('pointer up', function() {
            currentScore = currentScore - 1;
            this.scene.switch('thirdScene');
        });
        this.choice2 = this.add.text("Oh, haha, thanks.");
        choice2.on('pointer up', function() {
            this.scene.switch('thirdScene');
        });
        this.choice3 = this.add.text("You're pretty cool too!");
        choice3.on('pointer up', function(){
            currentScore = currentScore + 1;
            this.scene.switch('thirdScene');
        })
    };

thirdScene.preload = function() {
        this.load.image('character', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/sky.jpg')
    };
thirdScene.create = function() {
        this.add.sprite(100, 100, 'character');
        this.prompt = this.add.text("Well, I guess I better get going...");
        this.choice1 = this.add.text("          ...         ");
        choice1.on('pointer up', function() {
            currentScore = currentScore - 1;
            this.scene.switch('endScene');
        });
        this.choice2 = this.add.text("What was your name again?");
        choice2.on('pointer up', function() {
            this.scene.switch('endScene');
        });
        this.choice3 = this.add.text("I enjoyed it too!");
        choice3.on('pointer up', function(){
            currentScore = currentScore + 1;
            this.scene.switch('endScene');
        });
    };

endScene.preload = function() {
        this.load.image('character', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/sky.jpg')
    };

endScene.create = function() {
        this.add.sprite(100, 100, 'character');
        if (currentScore >= 1) {
            this.add.text("You win!")
            return
        }
        else {
            this.add.text("You lose!")
        }
};

// We no longer add the scene to the config
const config = {
	type: Phaser.AUTO,
	width: 800,
    height: 600,
    backgroundColor: 'white'
};

// Our game Object
const game = new Phaser.Game(config);

// Add both scenes (it does not start them)
game.scene.add("titleScene", titleScene);
game.scene.add("firstScene", firstScene);
game.scene.add("secondScene", secondScene);
game.scene.add("thirdScene", thirdScene);
game.scene.add("endScene", endScene);

// Start the title scene
game.scene.start("titleScene");

 

