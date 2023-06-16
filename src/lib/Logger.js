const colors = require("colors")

const time = new Date().toLocaleTimeString('en-IN', { timeZone: "Asia/Kolkata" })

class Logger {
  info(...input) {
    return console.log([
      colors.cyan.bold(time) + " ",
      colors.yellow.bold("[INFO]: "),
      ].join(" "), ...input)
  }

  success(...input) {
    return console.log([
      colors.cyan.bold(time) + " ",
      colors.green.bold("[SUCCESS]: "),
      ].join(" "), ...input)
  }

  warn(...input) {
    return console.log([
        colors.cyan.bold(time) + " ",
        colors.blue.bold("[WARN]: "),
        ].join(" "), ...input)
  }

  error(...input) {
    return console.log([
        colors.cyan.bold(time) + " ",
        colors.red.bold("[ERROR]: "),
        ].join(" "), ...input)
  }
}
module.exports = Logger