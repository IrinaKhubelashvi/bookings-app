function log(message, meta = {}) {
  console.info(`[INFO] ${message}`, meta);
}
function error(message, meta = {}) {
  console.error(`[ERROR] ${message}`, meta.error || meta);
}

module.exports = { log, error };
