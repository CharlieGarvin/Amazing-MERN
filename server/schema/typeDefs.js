const { gql } = requrie('apollo-server-express')

const typeDefs = gql`
type User {
    _id: ID
    email: String
    username: String
    password: String
    savedBooks: [Book]!
} 

type Book {
    _id: ID
    image: String
    bookId: String
    link: String
    title: String
    authors: String
    description: String
}
`

module.exports = typeDefs