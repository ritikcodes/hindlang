const { stl, env } = require("./constants");

//3. Evaluate the code
function evaluate(ast) {
  if (ast.type === "Function")
    return stl[ast.name](...ast.arguments.map(evaluate));
  if (ast.type === "VariableDeclaration") {
    return (env[ast.arguments[0].value] = evaluate(ast.arguments[1]));
  }
  if (ast.type === "Number") return ast.value;
  if (ast.type === "Identifier") return env[ast.value];
}

module.exports = { evaluate };
