import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddUser from "./AddUser";
import User from "./User";
import ViewUser from "./ViewUser";


function App() {


  return (
    <>
      <Routes>

        <Route path="/:id" element={<User />}></Route>

      </Routes>
      <div className="container py-5">
        <div className="row">
          <div className="col-6">
            <AddUser />
          </div>

          <ViewUser />

        </div>
      </div>

    </>
  );
}

export default App;
