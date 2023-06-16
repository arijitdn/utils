const gradient = require("gradient-string")
const figlet = require("figlet")

class Banner {
  create(...input) {
    return console.log(gradient.pastel(figlet.textSync(...input)))
  }
}

module.exports = Banner