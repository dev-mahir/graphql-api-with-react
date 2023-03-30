import { gql } from "@apollo/client";



export const CREATE_USER = gql`

mutation($input: UserInput) {

  addUser(input: $input) {
    id
    firstName
    lastName
    gender
    phone
    email
    isMarried
    }
  
}

`;
