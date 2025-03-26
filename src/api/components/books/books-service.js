const booksRepository = require('./books-repository');

async function getBooks(offset = 0, limit = 10) {
  return booksRepository.getBooks().skip(offset).limit(limit);
}

async function create(title) {
  return booksRepository.create(title);
}

module.exports = {
  getBooks,
  create,
};
