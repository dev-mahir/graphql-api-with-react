export const typeDefs = `#graphql

scalar EmailType


enum GenderEnum {
  Female
  Male
}

type User{
  id: ID
  firstName: String
  lastName: String
  gender: GenderEnum
  phone: String
  email: EmailType
  isMarried: Boolean
  posts: Post  
}

input UserInput{      #input keyword for get input
  id: ID
  firstName: String!
  lastName: String
  gender: GenderEnum
  phone: String
  email: EmailType
  isMarried: Boolean
}
input UpdateUserInput{  #update user 
  firstName: String
  lastName: String
  gender: GenderEnum
  phone: String
  email: EmailType
  isMarried: Boolean
}

input PostInput {
  id:ID
  title: String
  description: String
  user: ID
}

type Post{
  id:ID
  title: String
  description: String
  user: User
}

type Query {
  users: [User!]!,  #must User type array and must array
  user(id: ID!) : User,  # args id return User type user
  posts: [Post!]
  post(id: ID!) : Post 
}


type Mutation {
  #addUser( email: String, firstName: String) : User
  addUser(input: UserInput) : User ,#return User type
  updateUser(id:ID!, input: UpdateUserInput): User,
  addPost(input: PostInput) : Post,

}


`;
