// 2. Syntactic analysis: Build the AST
function getAST(tokens) {
  let index = 0;

  function helperFunction(tokens) {
    let ast = {};
    const arguments = [];

    while (tokens[index].value !== ")") {
      if (tokens[index].value === "(") {
        index++;
      }
      if (tokens[index].type === "VariableDeclaration") {
        ast.type = "VariableDeclaration";
        ast.name = tokens[index].value;
        ast.arguments = arguments;
        index++;
      }
      if (
        tokens[index].type === "Identifier" ||
        tokens[index].type === "Number"
      ) {
        arguments.push(tokens[index]);
        index++;
      }
      if (tokens[index].type === "Function") {
        ast.type = "Function";
        ast.name = tokens[index].value;
        ast.arguments = arguments;
        index++;
      }
      if (tokens[index].value === "(") {
        arguments.push(helperFunction(tokens));
        index++;
      }
    }

    return ast;
  }

  return helperFunction(tokens);
}

module.exports = { getAST };
