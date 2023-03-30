import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { CREATE_USER } from './GraphQL/Mutaions';

const ADD_USER = gql`
  mutation AddUser($input: UserInput) {
    addUser(input: $input) {
      id
      firstName
    }
  }
`;


const AddUser = () => {
  const [user, setUser] = useState({
    firstName: ""
  })
  const [addUser, { loading, error, data }] = useMutation(CREATE_USER);


  const addUserFrom = (e) => {
    e.preventDefault();
        if (error) { console.log(error)}
    if (data) { console.log(data)}
    if (loading) { console.log(loading) }
    



    addUser({
      variables: {
        input:  user 
      }
    })

    

  }


  return (
    <div className="card">
      <div className="card-body">
        <h4>Add User</h4>
        <form onSubmit={addUserFrom}>
          <div className="mb-2">
            <input type="text" onChange={(e) => setUser({ firstName: e.target.value })} value={user.firstName} className="form-control" placeholder="First Name" />
          </div>
          <div className="mb-2">
            <input type="text" className="form-control" placeholder="Last Name" />
          </div>
          <div className="mb-2">
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddUser








git init
git add .
git commit - m "first commit"
git branch - M main
git remote add origin https://github.com/dev-mahir/graphql-api-with-react.git
git push - u origin main