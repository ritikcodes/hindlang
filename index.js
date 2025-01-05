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
const code6 = "( x bara-hai y )";
const code7 = "( x chota-hai y )";
const code8 = "( x chota-barabar-hai y )";
const code9 = "( x bada-barabar-hai y )";
const code10 = "( x ghat y )";
const code11 = "( x guna y )";
const code12 = "( x bhag y )";
const code13 = "( x ghaat y )";
const code14 = "( x barabar 'str' )";
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
