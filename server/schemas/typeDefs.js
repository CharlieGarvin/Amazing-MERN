const { gql } = requrie('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    email: String!
    username: String!
    bookCount: Int!
    savedBooks: [Book]
} 

type Auth {
    token: ID!
    user: User
}

type Book {
    _id: ID!
    image: String!
    bookId: Int!
    link: String!
    title: String!
    authors: [String]
    description: String!
}

type Query {
    users: [User]
    user(username: String!): User
    books(username: String)
    book(bookId: ID!): Book
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors: [String]!, description: String!, title: String!, bookId: Int!, image: String!, link: String!): User
    removeBook(bookId: Int!): User
}
`;

module.exports = typeDefs