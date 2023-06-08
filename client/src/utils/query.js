import {gql} from '@apollo/client';

export const GET_ME = gql `
query stuff {
    stuff {
        _id
        email
        username
        thoughts {
            _id
            thoughtAuthour
            thoughtText
            createdAt
        }
    }
}`;