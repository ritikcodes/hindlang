const readline = require("readline");
const { tokenize } = require("./1.lexing");
const { getAST } = require("./2.ast");
const { evaluate } = require("./3.evaluate");

// Test cases
const code1 = "( 10 jama 10 )";
const code2 = "( 10 jama ( 10 jama 10 ) )";
const code3 = "( y barabar 10 )";
const code4 = "( y jama 10 )";
const code5 = "( x barabar y )";

function run(code) {
  const tokens = tokenize(code);
  const ast = getAST(tokens);
  return evaluate(ast);
}

// 4. REPL loop
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> ",
});

// REPL Function
function startRepl() {
  rl.prompt();
  rl.on("line", (input) => {
    try {
      const result = run(input.trim());
      console.log("Result:", result);
    } catch (error) {
      console.log("Error:", error.message);
    }
    rl.prompt();
  }).on("close", () => {
    console.log("Exiting REPL...");
    process.exit(0);
  });
}

startRepl();
