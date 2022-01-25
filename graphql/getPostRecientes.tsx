import gql from "graphql-tag"

export const getPostRecientes = gql`
query getPostRecientes {
    posts(
      first: 4
      where: {
        orderby: { field: DATE, order: DESC }
      }
    ) {
      edges {
        node {
          id
          date
          title
          slug
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`
