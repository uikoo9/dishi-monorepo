/**
 * normalLog
 * @param {*} msg
 * @param {*} color
 */
const normalLog = (msg, color) => {
  console.log(`%c${msg}`, color);
};

/**
 * infoLog
 * @param {*} msg
 */
export const infoLog = (msg) => {
  normalLog(msg, "color: green");
};
