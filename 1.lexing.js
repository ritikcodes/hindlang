const { stl } = require("./constants");

// 1. Lexing: Tokenize the code input
function getTokenProperties(token) {
  if (Number(token)) {
    return { type: "Number", value: Number(token) };
  }
  if (token === ")" || token === "(") {
    return { type: "Paranthesis", value: token };
  }

  if (stl[token]) {
    return { type: "Function", value: token };
  }

  if (token === "barabar") {
    return { type: "VariableDeclaration", value: token };
  }

  return { type: "Identifier", value: token };
}

function tokenize(code) {
  const tokens = [];
  let current = "";

  for (let i = 0; i < code.length + 1; i++) {
    if (code[i] === " " || !code[i]) {
      tokens.push(getTokenProperties(current));
      current = "";
    } else {
      current = current + code[i];
    }
  }

  return tokens;
}

module.exports = {
  tokenize,
};
