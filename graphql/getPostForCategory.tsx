import gql from "graphql-tag"

export const getPostsForCategory = gql`
query getPostsForCategory($first: Int, $categoryName: String!) {
    posts(
      first: $first
      where: {
        orderby: { field: DATE, order: DESC }
        categoryName: $categoryName
      }
    ) {
      pageInfo {
        endCursor
      }
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
