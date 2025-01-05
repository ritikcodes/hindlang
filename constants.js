// Storage
const env = {};

// Standard library
const stl = {
  jama: (a, b) => a + b,
  guna: (a, b) => a * b,
  bhag: (a, b) => a / b,
  ghaata: (a, b) => a - b,
  "bada-hai": (a, b) => a > b,
  "chota-hai": (a, b) => a < b,
  "bada-barabar-hai": (a, b) => a >= b,
  "chota-barabar-hai": (a, b) => a <= b,
  ghat: (a, b) => Math.pow(a, b),
  shabdjama: (variable, string) => {
    env[variable] = string;
    return env[variable];
  },
};

module.exports = {
  env,
  stl,
};
