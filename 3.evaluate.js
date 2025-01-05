const { stl, env } = require("./constants");

//3. Evaluate the code
function evaluate(ast) {
  if (ast.type === "Function") {
    return stl[ast.name](...ast.arguments.map(evaluate));
  }
  if (ast.type === "VariableDeclaration") {
    // console.log("here");
    if (ast.arguments[1].type === "String") {
      return (env[ast.arguments[0].value] = ast.arguments[1].value.replace(
        /^"(.*)"$/,
        "$1"
      ));
    }
    console.log(ast);
    return (env[ast.arguments[0].value] = evaluate(ast.arguments[1]));
  }
  if (ast.type === "Number") return ast.value;
  if (ast.type === "Identifier") return env[ast.value];
}
module.exports = { evaluate };
