import React, { useState } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";


// const ALL_PEOPLE = gql`
//   query AllPeople {
//     people {
//       id
//       name
//     }
//   }
// `;

const ADD_PERSON = gql`
  mutation AddPerson($name: String) {
    addPerson(name: $name) {
      id
      name
    }
  }
`;


async function foo() {

}

export default function App() {
  const [name, setName] = useState('');

  foo()

  return null;
}
