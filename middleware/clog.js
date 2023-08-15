// middleware/clog.js
function clog(req, res, next) {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();
  }
  
  module.exports = { clog };
  