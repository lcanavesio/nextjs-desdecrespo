import gql from "graphql-tag"

export const getPostRecientes = gql`
query getPostsForCategory($categoryName: String!) {
    posts(
      first: 10
      where: {
        orderby: { field: DATE, order: DESC }
        categoryName: $categoryName
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
