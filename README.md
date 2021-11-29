# The Morning After
## A Grindr-Ad Dating Sim Mobile Ad? #shamelesslyhustling

### Game Description
A dating simulation in which a player must choose from a selection of multiple choice responses in reaction to situational prompts in order to reach a desired "Good Ending" and avoid the "Bad Ending." In more complicated dating simulations, multiple brancing narratives and measuring of scores are tweaked with (but I haven't figured out how I want to tweak it yet)

### Product Pitch
A short 4-20 second mobile ad experience on Grindr that simulates the conversation after a random encounter and links viewers to resources for mental health, relationship counseling, etc. 

https://victorluo920.github.io/dating-sim-game/

### Technologies Used
HTML, CSS, Vanilla JS, JQuery, (messed with then ditched) Phaser

### Future Plans
Investigating collaborative development, assets generation, game and narative architecture

### Psuedocode
```
1) Define required constants
    1.1) Define a choices array that holds the index numbers for the possible choices available to the player, in order to randomize their order through each playthrough. 
    1.2) Define a winningScore constant: this could be a hardcoded number depending on the planned number of responses, though it could be fun to try and think of how to complicate the game a bit more. 
    1.3) Write out map out game flow and score tracking. Create a Scene Class that creates objects with a "prompt" key and a "choices" key, where prompts are strings, and choices are an array of strongs, and a "choiceScoreValues key" that contains an array that designates the score value of each choice. 

2) Define required variables used to track the state of the game
    2.2) Use a currentScore variable that tracks the player's score
    2.3) Use a currentReaction variable that tracks which image is being displayed as a "signaled reaction" to the player

3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.
    3.2) Use an image to represent the character to be "wooed", this should be an image that should have a "reaction" signal change depending on the choice the player made. 
    3.3) Use a prompts class that can be manipulated with CSS to be filled with different prompts that guide the player

4) Upon loading the app should:
	4.1) Initialize the state variables
        4.1.1) Initialize the webpage with starter page and transition to game image and choice-selection board. 
        4.1.2) Initialize currentScore to 0 and currentReaction to 0 (neutral expression)
	4.2) Render those values to the page
        4.2.1) Render first prompt on the screem
        4.2.2) Render first array of choices to first prompt as list items that have eventlisteners on them
	4.3) Wait for the user to click a choice

5) Handle a player clicking a choice
    5.1) Add that choice's scoreValue to the player's currentScore
    5.2) Change image and prompt according to the corresponding scoreValue plans
    5.3) Render next prompt and repeat until player has reached end of narrative journey and is taken to a "win" or "lose" scenario page depending on whether their currentScore matches of exceeds the winningScore. 
    5.4) Displays "play again?" button when game is over. 

6) Handle a player clicking the replay button
    6.1) Reinitializes the page.
```
