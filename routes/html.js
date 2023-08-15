const path = require('path');

function renderHomePage(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
}

function renderNotesPage(req, res) {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
}

function renderFeedbackPage(req, res) {
  res.sendFile(path.join(__dirname, '../public/pages/feedback.html'));
}

module.exports = {
  renderHomePage,
  renderNotesPage,
  renderFeedbackPage,
};
