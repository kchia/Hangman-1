const wordBank = [
  'alto',
  'soprano',
  'tenor',
  'baritone',
  'bass',
  'countertenor',
  'contralto',
  'heldentenor',
  'mezzo'
];

const guess = document.querySelector('.letter-guess');
const guessBtn = document.querySelector('.guess-button');

const answer = document.querySelector('.answer');

const input = document.querySelector('.letter-guess');

let guessedLetters = document.querySelector('.guessed-letters');

let guessesSection = document.querySelector('.guesses');

const randomBtn = document.querySelector('.random-word-button');
// to facilitate separating the button functions, declared following variables outside function at Jared Morgan's suggestion
let word = '';
let letterSpace = '';
let letters = '';
let graphicText = document.querySelector('.graphic-text');

guessedLetters = [];

randomBtn.addEventListener('click', handleRandomBtn);

guessBtn.addEventListener('click', handleGuessBtn);

// create function that when random button is pressed, random word is generated from wordBank and stored as an array of characters each in its own div, but hidden
function handleRandomBtn(event) {
  event.preventDefault();
  word = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log(word);
  for (let i = 0; i < 1; i += 1) {
    letters = word.split('');
    console.log(letters);

    for (let i = 0; i < letters.length; i++) {
      // create div + store each character in one

      letterSpace = document.createElement('div');
      letterSpace.setAttribute('class', 'letter-holder');
      // at Jerrica's suggestion, added new class to letterSpace to be able to find all matching values in following function
      letterSpace.classList.add(letters[i]);
      letterSpace.append(letters[i]);
      // attach character divs to answer
      answer.appendChild(letterSpace);
      letterSpace.style.display = 'inline';
    }
  }
}

function handleGuessBtn(event) {
  event.preventDefault();
  // moved .push and .append above for loop @ Jerrica Bobadilla's suggestion
  // guessedLetters.push(input.value);
  guessesSection.append(input.value);
  console.log(guessesSection);
  // console.log(letterSpace.letters[i]);
  for (let i = 0; i < letters.length; i++) {
    if (letters[i].includes(input.value) === true) {
      console.log('yes');
      console.log(letterSpace);
      // letterSpace.innerText = input.value;
      // find divs to set bg color for using the class
      letterSpace.style.backgroundColor = 'oldlace';
      // letterSpace.letters[i] += 'letters';
      letterSpace.style.display = 'inline';
      return; // makes sure loop only prints one guessed letter
    }
    if (letters[i] !== input.value) {
      console.log('Try Again');
      // return;
    }
    if (guessedLetters.length >= 10) {
      graphicText.innerText = 'YOU LOSE';
    }
  }
}

// if (guessedLetters.append(input.value) === true) {
// }
// change display of that letter only to be visible
// letters[i].style.visibility = 'visible';

// letters.forEach(myFunction);
// function myFunction(item, index) {
//   if (letters.includes(input.value) === true) {
//     letterSpace.style.backgroundColor = 'white';
//     letterSpace.style.display = 'inline';
//   } else if (letters.includes(input.value) === false) {
//     console.log('Try again');
//   }
/** need:
 * function 1:
 *  choose random word from wordBank using randomBtn
 *  split that word into array of letters
 *  create divs for each letter (create                 number of divs corresponding to letters.length)
 *  append each letter to its own div
 *  style of each div should be set to be invisible     (tried display= "none" and did not work, setting    it to inline worked though??)
 *  function 2:
 *  guess letter (input.value) using guessBtn
 *  if input.value is equal to a value in the           letters array (how to access when this was          created inside of function 1????), then reveal      matching values in the array by changing corresponding div display to "inline"
 *
 * if guessedLetters.length >= 15, change innerText of .graphic-text to You Lose
 * if all letters in word are revealed
 */
