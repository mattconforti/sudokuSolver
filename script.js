// fix scope & structure of this file

let gameSolution = ['A1', 'A2', 'A3', 'B2', 'B2', 'B3', 'C1', 'C2', 'C3', 
                    'A4', 'A5', 'A6', 'B4', 'B5', 'B6', 'C4', 'C5', 'C6', // < structure of this does not represent actual numbers in grid
                    'A7', 'A8', 'A9', 'B7', 'B8', 'B9', 'C7', 'C8', 'C9',
                    'D1', 'D2', 'D3', 'E1', 'E2', 'E3', 'F1', 'F2', 'F3',
                    'D4', 'D5', 'D6', 'E4', 'E5', 'E6', 'F4', 'F5', 'F6',
                    'D7', 'D8', 'D9', 'E7', 'E8', 'E9', 'F7', 'F8', 'F9',
                    'G1', 'G2', 'G3', 'H1', 'H2', 'H3', 'I1', 'I2', 'I3',
                    'G4', 'G5', 'G6', 'H4', 'H5', 'H6', 'I4', 'I5', 'I6',
                    'G7', 'G8', 'G9', 'H7', 'H8', 'H9', 'I7', 'I8', 'I9'
                   ];

// rename this its not clear what it actually is on first glance lol
let digits = document.getElementsByClassName('inner_grid_item');

// --- FUNCTIONS --------------------------------------------------------

// FUNCTION DOC HERE
function loadNewGame(gameDifficulty) {
    // MY LITTLE STEPS TO HOW I THINK THIS COULD WORK - WITHOUT LOOKING UP HOW OTHER PEOPLE HAVE APPROACHED THIS PROBLEM / DONE SUDOKU PROGRAMS
    // 1. select a solution from a list of full game solutions (& how to backtrack back to the givens? depends on how i wanna have the
    //    program solve the problems) given the gameDifficulty (shows which list to pick a game/solution from)
    // 2. print the givens... aka loadGivens()
    // 3. allow user to solve and check if it is in the list of backtracked solutions 
    //    (can show each step of the solutions in nested arrays)
    // 4. if user wins, win screen. have error screen where if you input X errors, you lose. other menu type stuff etc.
}

// GET JS FUNCTION DOCUMENTATION HERE HOW TO SHOW WHAT IT DOES LIKE JAVADOC.
// to be used inside of loadNewGame (called upon a new game starting) to print into the program the givens of said game solution
// (which is represented in an ordered array)
function loadGivens(solutionArray) {

}

function clearDigits() {
    for (let digit of digits) {
        digit.textContent = ' ';
    }
}

// ----------------------------------------------------------------------

document.getElementById('clear_button').addEventListener('click', () => clearDigits());

// is this efficient?? review why i have 2 loops to clear the highlights. ALSO HAVING A PROBLEM WITH THE RIGHT BORDER ON SOME OF THEM 
// OVERLAPPING THE BLACK BORDER. shows my black borders are taking up some of the content space. my spacing isnt exactly right. needs
// tiny adjustment for grid item size bc of pixels of borders
for (let d of digits) {  // add click listeners to all the digits
    d.addEventListener('click', () => {
        for (let dig of digits) {  // clear anything already highlighted
            if (dig.classList.contains('highlighted')) {
                dig.classList.remove('highlighted');
                break;
            }
        }
        d.classList.toggle('highlighted');  // highlight the element clicked
    });
}
