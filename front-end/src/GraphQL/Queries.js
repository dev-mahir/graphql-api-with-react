import { gql } from "@apollo/client";


export const GET_USER = gql`


  query{
    users {
      id
      firstName
      lastName
      email
      gender
      phone
      isMarried
    }
  }


  
`;