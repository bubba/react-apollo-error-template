import React from "react";
import { render } from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";

import { link } from "./graphql/link";
import App from "./App";

import "./index.css";

const client = new ApolloClient({
  cache: new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				viewer: {
					merge(existing, incoming, { mergeObjects } ) {
						console.log('existing')
						console.log(existing)
						console.log('incoming')
						console.log(incoming)
						const res = mergeObjects(existing, incoming)
						console.log('result')
						console.log(res)
						return res
					}
				}
			}
		}
	}
  }),
  link
});


const QUERY_A = gql`
  query a {
    viewer {
	  name
	}
  }
`

const QUERY_B = gql`
  query b {
    viewer {
	  id
	  email
    }
  }
`

async function foo() {
	const { data1 } = await client.query({ query: QUERY_A })
	console.log('cache')
	console.log(client.cache.data.data)
  const { data2 } = await client.query({query: QUERY_B})
	console.log('cache')
	console.log(client.cache.data.data)
}

foo()

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
