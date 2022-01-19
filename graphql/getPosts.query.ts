import gql from "graphql-tag"

export const getPosts = gql`
query getPosts($categoryName: String, $first: Int) {
    posts(
      first: $first
      where: {
        orderby: { field: DATE, order: DESC }
        categoryName: $categoryName
        tagNotIn: [9589, 9377]
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
