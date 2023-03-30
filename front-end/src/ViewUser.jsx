import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GET_USER } from './GraphQL/Queries';


const ViewUser = () => {


  const { loading, error, data } = useQuery(GET_USER);


  const [getusers, setUsers] = useState([])

  
  useEffect(() => {
    setUsers(data?.users);
  }, [data])

  return (
    <>
      <div className="col-6">

        <div className="card">
          <div className="card body">
            {loading && "Loading......"}

            {getusers?.map((item, index) =>

              <Link to={`/${item.id}`} key={index}>
                <div>
                  <h2>{item.firstName}</h2>
                  <p>{item.email}</p>
                </div>
              </Link>
            )}
          </div>
        </div>



      </div>
    </>
  )
}

export default ViewUser