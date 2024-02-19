// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// Step 1: Define the type for the magician names array
type MagicianArray = string[];

// Step 2: Create the showMagicians function
function showMagicians(magicians: MagicianArray): void {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

// Step 3: Create the makeGreat function
function makeGreat(magicians: MagicianArray): MagicianArray {
  return magicians.map((magician) => `the Great ${magician}`);
}

// Step 4: Create an array of magician names
const magicianNames: MagicianArray = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Step 5: Call makeGreat to modify the array
const greatMagicians: MagicianArray = makeGreat(magicianNames);

// Step 6: Call showMagicians to see the modified list
showMagicians(greatMagicians);