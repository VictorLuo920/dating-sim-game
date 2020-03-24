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
let titleScene = new Phaser.Scene("title");
let firstScene = new Phaser.Scene("first");
let secondScene = new Phaser.Scene("second");
let thirdScene = new Phaser.Scene("third");
let endScene = new Phaser.Scene("end");

// May have to refactor below code, anticipating possible error in trying to set all the methods neatly into one object declaration..., but quick inelegant workaround is simply going back to adding each method individually.


titleScene = {
    preload: function() {
        this.load.image('background', 'URLtoaddlater');
        this.load.image('character', 'URLtoaddlater')
    }
    create: function() {
        this.add.background('background');
        this.add.sprite(100, 100, 'character');
        let startGame = this.add.text("Start Game?")
        startGame.on('pointer up', function(){
            this.scene.switch('firstScene')
        })
        
    }
};

firstScene = {
    preload: function() {
        this.load.image('background', 'URLtoaddlater')
        this.load.image('character', 'URLtoaddlater')
    }
    create: function() {
        this.add.background('background');
        this.add.sprite(100, 100, 'character');
        this.prompt = this.add.text("Hey, that was a pretty intense night, huh?");
        this.choice1 = this.add.text("Why are you still here?");
        choice1.on('pointer up', function() {
            currentScore = currentScore - 1;
            this.scene.switch('secondScene');
        });
        this.choice2 = this.add.text("What was your name again?");
        choice2.on('pointer up', function() {
            this.scene.switch('secondScene');
        });
        this.choice3 = this.add.text("I enjoyed it too!");
        choice3.on('pointer up', function(){
            currentScore = currentScore + 1;
            this.scene.switch('secondScene');
        })
    }
};

secondScene = {
    preload: function() {
        this.load.image('background', 'URLtoaddlater')
        this.load.image('character', 'URLtoaddlater')
    }
    create: function() {
        this.add.background('background');
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
    }
};

thirdScene = {
    preload: function() {
        this.load.image('background', 'URLtoaddlater');
        this.load.image('character', 'URLtoaddlater')
    }
    create: function() {
        this.add.background('background');
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
    }
};

endScene = {
    preload: function() {
        this.load.image('background', 'URLtoaddlater');
        this.load.image('character', 'URLtoaddlater')
    }
    create: function() {
        this.add.background('background');
        this.add.sprite(100, 100, 'character');
        if (currentScore >= 1) {
            this.add.text("You win!")
            return
        }
        else {
            this.add.text("You lose!")
        }
    }
};

// We no longer add the scene to the config
const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
};

// Our game Object
const game = new Phaser.Game(config);

// Add both scenes (it does not start them)
game.scene.add("title", titleScene);
game.scene.add("first", firstScene);
game.scene.add("second", secondScene);
game.scene.add("third", thirdScene);
game.scene.add("end", endScene);

// Start the title scene
game.scene.start('titleScene');
