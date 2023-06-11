const { Book } = require('../models');

const resolvers = {
    Query: {
        book: async () => {
            return Book.find({});
        },
        Mutation: {
            createBook: async (parent, args) => {
                const book = await Book.create(args);
                return book;
            }
        }
    }
}

module.exports = resolvers;