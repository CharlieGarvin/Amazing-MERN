import {gql} from '@apollo/client';

export const USER_LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }`;

    export const USER_ADD = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }`;

    export const SAVE_BOOK = gql`
    mutation saveBook($description: String!) {
        addThought(description: $description)
                _id
                description
                title
                authors
                bookId
                link
                image
        }
    }`;

    export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId){
            _id
        }
    }`;