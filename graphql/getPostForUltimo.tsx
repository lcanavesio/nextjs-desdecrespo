import gql from "graphql-tag"

export const getPostForUltimo = gql`
query getPostForUltimo {
  posts(first: 5, where: { orderby: { field: DATE, order: DESC } }) {
    edges {
      node {
        id
        title
        slug
      }
    }
  }
}
`
