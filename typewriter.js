const sentence = "hello there from lighthouse labs";

let lag = 0; // set a initial delay time
for (const char of sentence) { // loop through the sentence variable's string
  setTimeout(() => { // setTimeout (callback to print char), lag
    process.stdout.write(char);
  }, lag);
  lag += 50; // lag increments after each loop
};

console.log("---") // add a space between the command line and sentence printout